/**
 * @description All routes with "/api/message" come through here.
 */

const express = require("express");
const messageController = require("./controller");

const apiRoutes = express.Router();
const messageRoutes = express.Router();

// Message Routes
apiRoutes.use("/chat", messageRoutes);

/**
 * @description HTTP GET /api/chat
 * @returns {JSON} - 
 */
messageRoutes.route("/messages")
    .get(messageController.getMessages)
    .post(messageController.postMessage);

module.exports = {
    router: apiRoutes,
    base: "/api"
};