package com.github.clnnn;

import static spark.Spark.*;

public class App {
    public static void main(String[] args) {
        webSocket("/chat", ChatHandler.class);
        init(); // Needed if you don't define any HTTP routes after your WebSocket routes
    }
}
