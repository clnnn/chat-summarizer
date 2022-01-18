package com.github.clnnn.events;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
    @Type(value = SendMessage.class, name = "SEND_MESSAGE"),
    @Type(value = BroadcastMessage.class, name = "BROADCAST_MESSAGE")
})
public abstract class Event {
  public EventType type;
}
