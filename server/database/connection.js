'use strict'

const mongoose = require("mongoose");
const chalk = require('chalk');
const replace = require('lodash/replace');

/**
 * @description The Mongoose database connection methods that handle
 * the connection
 */
module.exports = (config) => {
	mongoose.Promise = global.Promise;
	mongoose.set("debug", config.DB.DEBUG);

	/* create db connection */
	mongoose.connect(
		config.DB_CONNECTION_STRING,
		{
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		},
	);

	/* if connection established */
	// event is fired when the connection is successfully connected
	mongoose.connection.on("connected", () => {
		console.log(
			chalk`{green Mongoose connection opens {green.bold ${config.DB.NAME}}}`
		);
	});

	/* if connection failed */
	// event is fired when the connection is failed to connect
	mongoose.connection.on("error", err => {
		console.error(
			chalk`{red Mongoose connection error: {red bold ${config.DB.NAME}, ${err}}}`
		);
	});

	/* if connection disconnected */
	// event is fired when the user was disconnected.
	mongoose.connection.on("disconnected", err => {
		console.error(
			chalk`{red Mongoose connection: {red.bold ${config.DB.NAME}} disconnected}`
		);
	});

	/* close Mongoose connection if Node process ends */
	mongoose.connection.on("SIGINT", () => {
		mongoose.connection.close(() => {
			console.log(
				chalk`{yellow Mongoose connection disconnected through app termination {yellow.bold ${config.DB.NAME}}}`
			);
		});
		process.exit(0);
	});
}