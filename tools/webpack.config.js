var path = require("path");
//var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
    entry: "./src/app.jsx",
    output: { 
        path: path.join(__dirname, "../dist/assets/js"), 
        filename: "app.js" 
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/app.css", {
            allChunks: true
        })
    ]
};