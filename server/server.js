"use strict"

// Set environment variable ('prod' or 'dev')
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

const express = require("express");
const Express = require("./express");
// create instance of express, initialize express app
const app = express();
const server = require("http").createServer(app);
const webSocket = require("socket.io")(server);
const Routes = require("./routes");
const db = require("./database");
const Configs = require("./configs");

const configs = Configs.getConfig();

// start server
server.listen(configs.PORT, function () {
    console.log("Listening on port " + configs.PORT);
});

// listen on every connection
webSocket.on("connection", (socket) => {
    console.log(
        chalk`{A client just joined on {green.bold ${socket.id}}}`
    );
});

// initialize express
Express.init(app);

// connect Mongodb
db.connectMongoDB(configs);

// register routes
Routes.register(app);

module.exports = app;