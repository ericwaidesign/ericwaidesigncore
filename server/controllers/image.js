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
const HIGH_RES_IMG_FILE_PATH = 'images/highRes/';
const LOW_RES_IMG_FILE_PATH = 'images/lowRes/';

/**
 * Resturns a list of file name in JSON format 
 */
exports.getImages = function (request, response) {
    let images = [];
    let highResFileMap = new Map();
    let lowResFileMap = new Map();

    const highResFolderPath = path.join(__dirname, HIGH_RES_IMG_FOLDER_PATH);
    const lowResFolderPath = path.join(__dirname, LOW_RES_IMG_FOLDER_PATH);

    fs.readdirSync(highResFolderPath).forEach(file => {
        const highResPath = HIGH_RES_IMG_FILE_PATH;
        highResFileMap.set(file, highResPath);
    });
    fs.readdirSync(lowResFolderPath).forEach(file => {
        const lowResPath = LOW_RES_IMG_FILE_PATH;
        lowResFileMap.set(file, lowResPath);
    });

    if (highResFileMap.length == lowResFileMap.length) {
        const highResKeyArray = [...highResFileMap.keys()];
        const lowResKeyArray = [...lowResFileMap.keys()];
        const highResFileArray = [...highResFileMap.values()];
        const lowResFileArray = [...lowResFileMap.values()];
        console.log(highResKeyArray.length + " " + lowResKeyArray.length + " " + highResFileArray.length + " " + lowResFileArray.length);

        highResKeyArray.forEach((highResFileName, index) => {
            let image = new Image(highResFileName, lowResKeyArray[index], highResFileArray[index], lowResFileArray[index]);
            images.push(image);
        });
    } else {
        console.log("Error: number of high res files does not match the number of low res files");
    }

    response.json(images);
};