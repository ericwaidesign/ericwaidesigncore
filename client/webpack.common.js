/**
 * Webpack configure to package and bundle the js code. 
 * 
 * @author <ericwaidesign@gmail.com>
 */

const path = require('path');

// create index.html automatically with the script tag src='app.bundle.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
// HtmlWebpackPlugin configuration 
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    hash: true,
    title: "ericwaidesign", // index.html title
    template: "./src/index.html",
    filename: "./dist/index.html",
    component1: "TopNavBarRoot",
    component2: "ImageLoaderRoot"
})

module.exports = {
    // all the paths are relative to the root of the app
    entry: "./src/index.js",
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(html)$/,
                use: ["html-loader"]
            },
            {
                test: /\.jpg$/,
                use: ['ignore-loader']
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
};