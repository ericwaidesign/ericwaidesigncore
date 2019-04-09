"use strict"

const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");

exports.init = (app) => {

    // MIDDLEWARES: always load regardless of the environment:
    // =======================================================

    // secure Express app with various HTTP headers
    app.use(helmet);

    // parse application/x-www-form-urlencoded
    //  parse incoming JSON form data POST requests into req.body obj
    app.use(bodyParser.json());
    // parses urlencoded body
    app.use(bodyParser.urlencoded({ extended: false }));

    // allow cross-origin resource sharing (CORS)
    app.use(function(req, res, next) {
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