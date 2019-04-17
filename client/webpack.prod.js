/**
 * @author <ericwaidesign@gmail.com>
 */

const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackStripLoader = require('strip-loader');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [WebpackStripLoader.loader('console.log')],
                exclude: /node_modules/
            }
        ]
    }
});