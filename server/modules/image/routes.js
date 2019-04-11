"use strict"

/**
 * modules/image/image.routes.js
 *
 * @description All routes with "/api/image" come through here.
 */

const express = require("express");
const ImageController = require("./controller")

const apiRoutes = express.Router();
const imageRoutes = express.Router();

// Image Routes
apiRoutes.use("/images", imageRoutes);

/**
 * @description HTTP GET /api/image
 * @returns {JSON} - the list of file name in JSON format
 */
imageRoutes.route("/")
    .get(ImageController.getImages);

module.exports = {
    router: apiRoutes,
    base: "/api"
};