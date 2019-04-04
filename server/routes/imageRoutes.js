// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
const express = require('express');
const path = require('path');

const imageController = require('../controllers/image');

/*
 * Module initialization
 */
module.exports = function(app) {

    const imageRoutes = express.Router();

    /**
     * HTTP GET /api/images
     * Returns: the list of file name in JSON format
     */
    app.get('/api/images', (req, res) => {
        imageController.getImages(req, res);
    });

}