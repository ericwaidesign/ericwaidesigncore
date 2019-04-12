'use strict';

const path = require("path");
const Express = require("./express");

module.exports = {

    /**
     * Load the correct configuration file according to the 'NODE_ENV' variable.
     */
    getConfig: () => {
        return require(`./envs/config.${process.env.NODE_ENV}.js`);
    },

    /**
     *
     */
    initExpress: (app) => {
        return Express.init(app);
    }

}