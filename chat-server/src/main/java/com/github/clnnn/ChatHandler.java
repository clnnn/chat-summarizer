package com.github.clnnn;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.clnnn.events.BroadcastMessage;
import com.github.clnnn.events.Event;
import com.github.clnnn.events.SendMessage;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;


@WebSocket
public class ChatHandler {

    private final Map<Session, String> users = new HashMap<>();
    private final ObjectMapper mapper = new ObjectMapper();

    public ChatHandler() {

    }

    @OnWebSocketConnect
    public void connected(Session session) throws IOException {
        var username = session.getUpgradeRequest().getParameterMap().get("username").get(0);
        this.users.put(session, username);
    }

    @OnWebSocketClose
    public void closed(Session session, int statusCode, String reason) {
        this.users.remove(session);
    }

    @OnWebSocketMessage
    public void message(Session session, String json) throws IOException {
        var event = this.mapper.readValue(json, Event.class);
        var senderUsername = this.users.get(session);

        switch (event.type) {
            case SEND_MESSAGE:
                this.broadcast(senderUsername, (SendMessage) event);
            default:
        }
    }

    private void broadcast(String sender, SendMessage event) {
        this.users.keySet().stream()
                .filter(Session::isOpen)
                .forEach(session -> {
                    var fromMe = this.users.get(session).equals(sender);
                    var broadcastMessage = new BroadcastMessage(sender, event.message, fromMe);
                    try {
                        var json = this.mapper.writeValueAsString(broadcastMessage);
                        session.getRemote().sendString(json);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });
    }
}
