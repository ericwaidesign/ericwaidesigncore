// server/controllers/image.js

// Invoke 'strict' JavaScript mode
'use strict'

const fs = require('fs');
const general = require('../utils/general');
const Image = require('../models/Image');

// pathes to the images
const HIGH_RES_IMG_FOLDER_PATH = '../../client/src/assets/images/highRes/';
const LOW_RES_IMG_FOLDER_PATH = '../../client/src/assets/images/lowRes/';

// pathes for the client
const HIGH_RES_IMG_FILE_PATH = 'images/highRes/';
const LOW_RES_IMG_FILE_PATH = 'images/lowRes/';

/**
 * Resturns a list of file name in JSON format
 */
exports.getImages = function(request, response) {
    const images = [];
    const highResFileMap = new Map();
    const lowResFileMap = new Map();

    const highResFolderPath = general.getRelativePath(HIGH_RES_IMG_FOLDER_PATH);
    const lowResFolderPath = general.getRelativePath(LOW_RES_IMG_FOLDER_PATH);

    const highResFiles = fs.readdirSync(highResFolderPath);
    highResFiles.forEach((fileName) => {
        const newFileName = general.getFileNameWithoutExtension(fileName);
        const newFilePath = general.joinPaths(HIGH_RES_IMG_FILE_PATH, fileName);
        highResFileMap.set(newFileName, HIGH_RES_IMG_FILE_PATH);
    });

    const lowResFiles = fs.readdirSync(lowResFolderPath);
    lowResFiles.forEach((fileName) => {
        const newFileName = general.getFileNameWithoutExtension(fileName);
        const newFilePath = general.joinPaths(LOW_RES_IMG_FILE_PATH, fileName);
        lowResFileMap.set(newFileName, newFilePath);
    });

    if (highResFileMap.length == lowResFileMap.length) {
        const highResKeyArray = [...highResFileMap.keys()];
        const lowResKeyArray = [...lowResFileMap.keys()];
        const highResFileArray = [...highResFileMap.values()];
        const lowResFileArray = [...lowResFileMap.values()];

        highResKeyArray.forEach((highResFileName, index) => {
            // console.log(highResFileName + " " + lowResKeyArray[index] + " " + highResFileArray[index] + " " + lowResFileArray[index]);
            const image = new Image(highResFileName, lowResKeyArray[index], highResFileArray[index], lowResFileArray[index]);
            images.push(image);
        });
    } else {
        console.log("Error: missing high resolution image(s) or low resolution images(s)");
    }

    response.json(images);
};