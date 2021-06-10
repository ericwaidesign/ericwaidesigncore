"use strict"

const cors = require('cors');
const helmet = require("helmet");
const morgan = require("morgan");

exports.init = (app, express) => {

	// MIDDLEWARES: always load regardless of the environment:
	// =======================================================

	// secure Express app with various HTTP headers
	app.use(helmet());

	// Cross-Orgin Resrouce Sharing
	//  the way to let clients and servers communicate even if they are
	//  not on the same domain.
	app.use(cors({
		exposedHeaders: "*"
	}));

	// parse application/x-www-form-urlencoded
	//  parse incoming JSON form data POST requests into req.body obj
	app.use(express.urlencoded( {extended:false} ));
	app.use(express.json());

	// allow cross-origin resource sharing (CORS)
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept"
		);
		next();
	});

	// HTTP request logger
	//  Log requests to API using morgan
	app.use(morgan('dev'));

};