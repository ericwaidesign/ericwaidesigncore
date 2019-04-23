"use strict"

/**
 * @description All routes with "/api/message" come through here.
 */

const express = require("express");
const messageController = require("./controller");

const apiRoutes = express.Router();
const messageRoutes = express.Router();
const messagesRoutes = express.Router();

// Message Routes
// apiRoutes.use("/message", messageRoutes);
apiRoutes.use("/messages", messagesRoutes);

/**
 * @description HTTP GET /api/chat
 * @returns {JSON} - the list of file name in JSON format
 */
messagesRoutes.route("/")
    .get(messageController.getMessages);

module.exports = {
    router: apiRoutes,
    base: "/api"
};