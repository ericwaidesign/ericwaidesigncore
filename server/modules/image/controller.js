"use strict"

const fs = require("fs");
const general = require("../../utils/general");
const Image = require("./model");

// path to images folder
const IMG_FOLDER_PATH = "../../client/public/assets/images/";
// pathes for the client
const IMG_RELATIVE_PATH = "./assets/images/";

const LOW_RES = "lowRes_";

/**
 * Resturns a list of file name in JSON format
 */
exports.getImages = function(request, response) {
    const images = [];
    const imgFolderPath = general.getRelativePath(IMG_FOLDER_PATH);

    const files = fs.readdirSync(imgFolderPath);
    files.forEach((fileName) => {
        if (!fileName.includes(LOW_RES)) {
            const highResFileName = fileName;

            // get the original file name by removing the hash
            const fileNameWithoutHash = fileName.split("-")[1];

            // get the low res file name
            let lowResFileName;
            files.forEach((file) => {
                if (file.includes(LOW_RES + fileNameWithoutHash)) {
                    lowResFileName = file;
                }
            });

            const highResPath = IMG_RELATIVE_PATH + highResFileName;
            const lowResPath = IMG_RELATIVE_PATH + lowResFileName;

            const image = new Image(highResFileName, highResPath, lowResFileName, lowResPath);
            images.push(image);
        }
    });

    response.json(JSON.stringify(images));
};