// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

const image_controller = require('../controllers/image');

/**
 * HTTP GET /api/images
 * Returns: the list of file name in JSON format
 */
router.get('/api/images', (req, res) => {
    image_controller.getImages(req, res);
});

module.exports = router;