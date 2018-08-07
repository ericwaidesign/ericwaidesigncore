// server/controllers/image.js

// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var fs = require('fs');
const path = require('path');

const imageDir = '../../client/src/assets/images/highRes/';

/**
 * Resturns a list of file name in JSON format 
 * Returns Json, ex: ["GrabandGoCover_G1_HI.jpg", "GrabandGoCover_G2_HI.jpg"...
 */
exports.getImages = function(request, response) {
    var filePathList = [];
    fs.readdirSync(path.join(__dirname, imageDir)).forEach(file => {
        filePathList.push(file); 
    })
    response.json(filePathList);
};