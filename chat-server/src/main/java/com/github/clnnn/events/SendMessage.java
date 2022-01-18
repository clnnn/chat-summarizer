package com.github.clnnn.events;

public class SendMessage extends Event {
    public String message;

    public SendMessage() {
        this.type = EventType.SEND_MESSAGE;
    }
}
