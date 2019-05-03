"use strict"

/**
 * @description All routes with "/api/room" or "api/rooms" come through here.
 */

const express = require("express");
const roomController = require("./controller")

const apiRoutes = express.Router();
const roomRoutes = express.Router();
const roomsRoutes = express.Router();

// Room Routes
apiRoutes.use("/room", roomRoutes);
apiRoutes.use("/rooms", roomsRoutes);

/**
 * @description HTTP GET /api/room
 * @returns {JSON}
 */
roomRoutes.route("/")
    .get(roomController.getRooms);

/**
 * @description HTTP POST /api/room
 * @returns {JSON}
 */
roomRoutes.route("/addRoom")
    .post(roomController.createRoom);

module.exports = {
    router: apiRoutes,
    base: "/api"
};