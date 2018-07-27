// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
const config = require('./general');
const bodyParser = require('body-parser');
const express = require('express'); // server framework for node
const fs = require("fs");
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');

// setup DB connection
mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* 
 * Module initialization
 */
module.exports = function() {
    
    // CONFIGURATION
    // =========================================================================
    // create instance of express, initialize express app
    var app = express();
    
    // MIDDLEWARES: always load regardless of the environment:
    // =======================================================
    // parse incoming JSON form data POST requests into req.body obj
    app.use(bodyParser.json());
    // parses urlencoded body
    app.use(bodyParser.urlencoded({ extended: false }));

    // initialized middleware for bootstrapping the Passport module 
    //  and the passport before using the route middleware
    app.use(passport.initialize());

    app.use(logger('dev')); // Log requests to API using morgan

    // ROUTES FOR API
    // =======================================================
    var routePath = "../routes/";
    fs.readdirSync(__dirname + "../" + routePath).forEach(function(file) {
        var route = require(routePath + file); // path to routes.js
        route(app);
    });

    // return Express server instance
    return app;

};
