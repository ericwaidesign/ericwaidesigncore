const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),
    filename: "index.html"
})

// copy all the images from src to dist
const CopyWebpackPlugin = require("copy-webpack-plugin");
// CopyWebpackPlugin configuration
const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: "src/assets/images",
    to: "assets/images"
}]);

module.exports = {
    entry: [
        "@babel/polyfill", path.join(__dirname, "src/index.js")
    ],
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
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