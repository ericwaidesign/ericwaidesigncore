"use strict"

const express = require("express");
const fs = require("fs");
const General = require("../utils/general");
const Modules = General.getRelativePath("../modules");
const chalk = require('chalk');

/**
 * @description register routes
 */
exports.register = app => {

    /**
     * @description register routes for all the modules
     */
    try {
        fs.readdirSync(Modules)
            .filter(dir => {
                return fs.statSync(`${Modules}/${dir}`).isDirectory();
            })
            .forEach(dir => {
                const path = `${Modules}/${dir}/routes`;
                const file = require(path);
                // console.log("registering routes from: " + path);
                app.use(file.base, file.router);
            });
    } catch (error) {
        // console.log(
        //     chalk`{red Failed to register routes: {red.bold ${error}}}`
        // );
    }

    /**
     * @description The "catch all" handler: for any request
     * that doesn't match one above, send back React's
     * index.html file.
     */
    app.get("/", (req, res) => {
        res.sendFile(General.getRelativePath("../../client/public/index.html"));
    });

    /**
     * @description Serve any static files
     */
    app.use(
        express.static(General.getRelativePath("../../client/public/"))
    );
};
