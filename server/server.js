"use strict"

// Set environment variable ("prod" or "dev")
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const routes = require("./routes");
const db = require("./database");
const coreConfigs = require("../ericwaidesigncore-configs");
const configs = coreConfigs.getConfig();

const express = require("express");
const Express = require("./express");
const app = express(); // create instance of express, initialize express app

const server = require("http").createServer(app);
// start server
server.listen(configs.PORT, function () {
    console.log("Listening on port " + configs.PORT);
});

// initialize express
Express.init(app);

// connect Mongodb
db.connectMongoDB(configs);

// register routes
routes.register(app);

module.exports = app;