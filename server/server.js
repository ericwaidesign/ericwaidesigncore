"use strict"

const express = require("express");
// create instance of express, initialize express app
const app = express();
const server = require("http").createServer(app);
const Routes = require("./routes");
const db = require("./database");
const Express = require("./express");
const Config = require("./configs");

const config = Config.getConfig();

// start server
server.listen(config.PORT, function() {
    console.log('Listening on port ' + config.PORT);
});

// initialize express
Express.init(app);

// connect Mongodb
db.connectMongoDB(config);

// register routes
Routes.register(app);

module.exports = app;