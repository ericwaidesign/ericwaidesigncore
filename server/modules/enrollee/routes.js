/**
 * @description All requests with "/api/enrollees" come through here.
 */

const express = require("express");
const enrolleeController = require("./controller")

const apiRoutes = express.Router();
const enrollmentRoutes = express.Router();

// Enrollment Routes
apiRoutes.use("/enrollees", enrollmentRoutes);

/**
 * @description /api/enrollees
 */
enrollmentRoutes.route("/")
    .get(enrolleeController.getAllEnrollees)
    .post(enrolleeController.createEnrollees)
    .delete(enrolleeController.removeAllEnrollees);

module.exports = {
    router: apiRoutes,
    base: "/api"
};