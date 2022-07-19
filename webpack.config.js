const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/scripts/background/main.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "scripts/[name].js",
    },
    // module: {

    // },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: "Thanks for installing Tab Butler 🥳🤗!",
        //     filename: path.resolve(__dirname, `${distPath}/welcome/welcome.html`),
        //     template: `src/welcome/welcome.html`,
        //     chunks: ["welcome"]
        // }),


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