/**
 * @author <ericwaidesign@gmail.com>
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: [
        "@babel/polyfill", path.join(__dirname, "src/index.js")
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 9000
    }
});