"use strict"

const express = require("express");
const fs = require("fs");
const General = require("../utils/general");
const Modules = General.getRelativePath("../modules");

/**
 * @description register routes
 */
exports.register = app => {

    /**
     * @description register routes for all the modules
     */
    fs.readdirSync(Modules)
        .filter(dir => {
            return fs.statSync(`${Modules}/${dir}`).isDirectory();
        })
        .forEach(dir => {
            const file = require(`${Modules}/${dir}/routes`);
            app.use(file.base, file.router);
        });

    /**
     * @description Serve any static files
     */
    app.use(
        express.static(General.getRelativePath("../../client/build")));

    /**
     * @description The "catchall" handler: for any request 
     * that doesn't match one above, send back React's 
     * index.html file.
     */
    app.get("/", (req, res) => {
        res.sendFile(General.getRelativePath("../../client/public/index.html"));
    });
};
