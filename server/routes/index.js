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
    fs.readdirSync(Modules)
        .filter(dir => {
            return fs.statSync(`${Modules}/${dir}`).isDirectory();
        })
        .forEach(dir => {
            try {
                //
                if (dir === 'socket') {
                    const server = require('http').Server(app);
                    const io = require('socket.io')(server);
                    require("./io").init(io);
                } else {
                    const path = `${Modules}/${dir}/routes`;
                    const file = require(path);
                    app.use(file.base, file.router);
                }
            } catch (error) {
                console.log(
                    chalk`{red Failed to register routes for module: ${Modules} in ${dir}: {red.bold ${error}}}`
                );
            }
        });

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
