"use strict"

// Set environment variable ("prod" or "dev")
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

const Routes = require("./routes");
const db = require("./database");
const Configs = require("./configs");
const configs = Configs.getConfig();

const express = require("express");
const Express = require("./express");
const app = express(); // create instance of express, initialize express app
const server = require("http").createServer(app);

// attach socket io to HTTP server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });
const Wss = require("./wss");
Wss.init(wss);

// start server
server.listen(configs.PORT, function () {
    console.log("Listening on port " + configs.PORT);
});

// initialize express
Express.init(app);

// connect Mongodb
db.connectMongoDB(configs);

// register routes
Routes.register(app);

module.exports = app;