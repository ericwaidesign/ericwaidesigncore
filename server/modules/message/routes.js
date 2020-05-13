/**
 * @description All routes with "/api/message" come through here.
 */

const express = require("express");
const messageController = require("./controller");

const apiRoutes = express.Router();
const messageRoutes = express.Router();

// Message Routes
apiRoutes.use("/messages", messageRoutes);

/**
 * @returns {JSON} - 
 */
messageRoutes.route("/")
    .get(messageController.getMessages)
    .post(messageController.postMessage);

module.exports = {
    router: apiRoutes,
    base: "/api"
};