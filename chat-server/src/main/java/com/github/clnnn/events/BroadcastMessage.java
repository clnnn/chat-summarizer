package com.github.clnnn.events;

public class BroadcastMessage extends Event {
    public final String sender;
    public final String message;
    public final boolean fromMe;
    
    public BroadcastMessage(String sender, String message, boolean fromMe) {
        this.type = EventType.BROADCAST_MESSAGE;
        this.message = message;
        this.sender = sender;
        this.fromMe = fromMe;
    }
}
