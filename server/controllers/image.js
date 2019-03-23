// server/controllers/image.js

// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
const fs = require('fs');
const path = require('path');
// Load the module dependencies
const Image = require('../models/Image');

const highResFolder = '../../client/src/assets/images/highRes/';
const lowResFolder = '../../client/src/assets/images/lowRes/';

/**
 * Resturns a list of file name in JSON format 
 */
exports.getImages = function(request, response) {
    let imageList = [];
    const highResFolderPath = path.join(__dirname, highResFolder);
    const lowResFolderPath = path.join(__dirname, lowResFolder);

    fs.readdirSync(highResFolderPath).forEach(file => {
        const highResPath = path.join(highResFolderPath, file);
        const lowResPath = path.join(lowResFolderPath, file)
        let newImage = new Image(file, highResPath, lowResPath);

        imageList.push(newImage); 
    })
    
    response.json(imageList);
};