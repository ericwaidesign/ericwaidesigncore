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
    template: "./src/index.html",
    filename: "index.html"
});

// copy all the images from src to dist
const CopyWebpackPlugin = require("copy-webpack-plugin");
// CopyWebpackPlugin configuration
const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: "src/assets/images",
    to: "assets/images"
}]);

module.exports = {
    // all the paths are relative to the root of the app
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        // use resolve to create the absolute path needed
        path: path.resolve(__dirname, "dist/"),
        // publicPath: "/assets/"
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
                // any file extension matches .png, .jpeg, .jpg or .svg
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // Convert images < 8kb to base64 strings, inlined in the code
                        // larger images will be passed to file-loader to process
                        limit: 8000,
                        name: 'assets/images/[hash]-[name].[ext]'
                    }
                }]
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