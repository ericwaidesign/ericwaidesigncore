// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var express = require('express');
var imageController = require('../controllers/image');

/* 
 * Module initialization
 */
module.exports = function(app) {
 
    var apiRoutes = express.Router();
    var imageRoutes = express.Router();

    // Image Routes
    apiRoutes.use('/image', imageRoutes);

    apiRoutes.get('/', imageController.getImages);

    app.use('/api', apiRoutes);

}