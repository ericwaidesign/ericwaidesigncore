"use strict"

/**
 * modules/image/image.routes.js
 * 
 * @description All routes with "/api/images" come through here.
 */

const router = require("express").Router;
const ImageController = require("./controller")

/**
 * HTTP GET /api/images
 * Returns: the list of file name in JSON format
 */
router
    .get("/api/images", ImageController.getImages);

module.exports = router;