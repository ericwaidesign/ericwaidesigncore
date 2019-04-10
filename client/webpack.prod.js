/**
 * @author <ericwaidesign@gmail.com>
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpackStripLoader = require('strip-loader');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [webpackStripLoader.loader('console.log')],
                exclude: /node_modules/
            }
        ]
    }
});