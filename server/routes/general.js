// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
const express = require('express');
const path = require('path');

/* 
 * Module initialization
 */
module.exports = function(app) {

    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
 
    // Handle React routing, return all requests to React app
    app.get('/api/hello', (req, res) => {
        res.send({ express: 'Hello From Express' });
    });

    // The "catchall" handler: for any request that doesn't
    // match one above, send back React's index.html file.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/../../client/build/index.html'));
    });

}