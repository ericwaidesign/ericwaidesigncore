'use strict'

const mongoose = require("mongoose");
const chalk = require('chalk');

module.exports = (config) => {
    mongoose.Promise = global.Promise;
    mongoose.set("debug", config.DB.DEBUG);

    const url = `mongodb://${config.DB.HOST}/${config.DB.MONGODB}`;

    /* create db connection */
    mongoose.connect(
        url,
        // { useMongoClient: true }
        { useNewUrlParser: true }
    );

    /* if connection established */
    mongoose.connections.on("connect", () => {
        console.log(
            chalk`{green Successfully connected to mongDB {green.bold ${config.DB.MONGODB}}}`
        );
    });

    /* if connection failed */
    mongoose.connections.on("error", err => {
        console.error(
            chalk`{red Failed to connect to mongodb: {red bold ${config.DB.MONGODB}, ${err}}}`
        );
    });

    /* if connection disconnected */
    mongoose.connections.on("disconnected", err => {
        console.error(
            chalk`{red Connection to mongodb: {red.bold ${config.DB.MONGODB}} disconnected}`
        );
    });
}