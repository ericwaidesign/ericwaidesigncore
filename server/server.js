// Invoke 'strict' JavaScript mode
'use strict'

// Set environment variable ('production' or 'development')
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
var app = require('./configs/express')(); // initializes module
var http = require('http');

// set environment specific configs into Express instance
var config = require('./configs/general');
var port = process.env.PORT || config.port;
app.set('port', port);

// Create HTTP server
var server = http.createServer(app);

// 
var io = require('socket.io').listen(server);

// Listen on provided port, on all network interfaces.
server.listen(port, function() {
    console.log('Listening on port ' + port);
});