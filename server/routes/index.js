"use strict"

const path = require("path");
const fs = require("fs");
const Modules = path.resolve("./modules");

/**
 * @description register routes for all the modules
 */
exports.register = app => {
    fs.readdirSync(Modules)
        .filter(dir => {
            return fs.statSync(`${Module}/${dir}`).isDirectory();
        })
        .forEach(dir => {
            const file = require(path.resolve(`./module/${dir}/${dir}.routes.js`));
            app.use(file.base, file.router);
        });
};
