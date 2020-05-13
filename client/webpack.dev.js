/**
 * @author <ericwaidesign@gmail.com>
 */

const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    // ,
    // devServer: {
    //     port: 9000
    // }
});