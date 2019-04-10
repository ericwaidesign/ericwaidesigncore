'use strict';

const path = require("path");

// Load the correct configuration file according to the 'NODE_ENV' variable
module.exports = {
    getConfig: () => {
        return require(`./envs/config.${process.env.NODE_ENV}.js`);
    }
}