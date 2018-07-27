// server/controllers/image.js

// Invoke 'strict' JavaScript mode
'use strict'

// Load the module dependencies
var fs = require('fs');

const imageDir = '.././src/assets/images/';
const fileType = ".jpg";

exports.getImages = function(req, res) {
    var filePathList = [];
    fs.readdirSync(imageDir).forEach(file => {
        filePathList.push(file); 
    })
    return filePathList;
};