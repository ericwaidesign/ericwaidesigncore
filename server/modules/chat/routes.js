"use strict"

/**
 * @description All routes with "/api/image" come through here.
 */

const express = require("express");
const ChatController = require("./controller")

const apiRoutes = express.Router();
const chatRoutes = express.Router();

// Chat Routes
apiRoutes.use("/chat", chatRoutes);

/**
 * @description HTTP GET /api/chat
 * @returns {JSON} - the list of file name in JSON format
 */
chatRoutes.route("/")
    .get(ChatController.getMessages);

module.exports = {
    router: apiRoutes,
    base: "/api"
};