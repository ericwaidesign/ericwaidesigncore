"use strict"

// Set environment variable ('prod' or 'dev')
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const express = require("express");
// create instance of express, initialize express app
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server);
const Routes = require("./routes");
const db = require("./database");
const Configs = require("./configs");

const configs = Configs.getConfig();

// start server
server.listen(configs.PORT, function() {
    console.log('Listening on port ' + configs.PORT);
});

// initialize express
Configs.initExpress(app);

// connect Mongodb
db.connectMongoDB(configs);

// register routes
Routes.register(app);

module.exports = app;