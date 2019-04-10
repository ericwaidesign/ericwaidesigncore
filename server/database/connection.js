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
    mongoose.connection.on("connected", () => {
        console.log(
            chalk`{green Mongoose connection opens {green.bold ${config.DB.MONGODB}}}`
        );
    });

    /* if connection failed */
    mongoose.connection.on("error", err => {
        console.error(
            chalk`{red Mongoose connection error: {red bold ${config.DB.MONGODB}, ${err}}}`
        );
    });

    /* if connection disconnected */
    mongoose.connection.on("disconnected", err => {
        console.error(
            chalk`{red Mongoose connection: {red.bold ${config.DB.MONGODB}} disconnected}`
        );
    });

    /* close Mongoose connection if Node process ends */
    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log(
                chalk`{yellow Mongoose connection disconnected through app termination {yellow.bold ${config.DB.MONGODB}}}`
            );
        });
        process.exit(0);
    });
}