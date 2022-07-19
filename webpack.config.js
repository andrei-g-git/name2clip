const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, "src/scripts/background/main.js"),
        popup: path.resolve(__dirname, "src/scripts/popup/popup.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "scripts/[name].js",
    },
    // module: {

    // },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "test title",
            filename: path.resolve(__dirname, "dist/popup.html"),
            template: "src/popup.html"/* ,
            chunks: ["welcome"] */
        }),


        /* {}, */
        new CopyPlugin({
            patterns: [
                {
                    from: "manifest.json",
                    to: "manifest.json" 
                },
                { 
                    from: "src/assets", 
                    to: "assets" 
                },
            ],
        }),
    ]
};