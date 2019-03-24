// server/controllers/image.js

// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
const fs = require('fs');
const path = require('path');
const Image = require('../models/Image');

const HIGH_RES_IMG_FOLDER_PATH = '../../client/src/assets/images/highRes/';
const LOW_RES_IMG_FOLDER_PATH = '../../client/src/assets/images/lowRes/';

// used for constructing the paths to be used by the client
const HIGH_RES_IMG_FILE_PATH = '../../assets/images/highRes/';
const LOW_RES_IMG_FILE_PATH = '../../assets/images/lowRes/lowRes_';

/**
 * Resturns a list of file name in JSON format 
 */
exports.getImages = function (request, response) {
    let images = [];
    let highResFiles = new Map();
    let lowResFiles = new Map();

    const highResFolderPath = path.join(__dirname, HIGH_RES_IMG_FOLDER_PATH);
    const lowResFolderPath = path.join(__dirname, LOW_RES_IMG_FOLDER_PATH);

    fs.readdirSync(highResFolderPath).forEach(file => {
        const highResPath = path.join(HIGH_RES_IMG_FILE_PATH, file);
        highResFiles.set(file, highResPath);
    });
    fs.readdirSync(lowResFolderPath).forEach(file => {
        const lowResPath = path.join(LOW_RES_IMG_FILE_PATH, file)
        lowResFiles.set(file, lowResPath);
    });

    if (highResFiles.length == lowResFiles.length) {
        const keys = Object.keys(highResFiles);

        keys.forEach((file, index) => {
            let image = new Image(file, highResPath[index], lowResPath[index]);
        });
        
        images.push(image);
    } else {
        console.log("Error: number of high res files does not match the number of low res files");
    }

    response.json(images);
};