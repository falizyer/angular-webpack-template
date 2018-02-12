const path = require("path");
const defaultConfig = require("../default.config");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    webpack: {
        context: defaultConfig.src,
        devtool: "eval",
        entry: {
            "angular-webpack-template": ["./index.module.js"]
        },
        stats: {
            colors: true,
            modules: true,
            reasons: true
        },
        output: {
            path: defaultConfig.dist,
            filename: "[name].bundle.js",
            chunkFilename: "[id].bundle.js"
        },
        resolve: {
            modules: ["node_modules"],
            mainFiles: ["index"],
            extensions: [".less", ".js"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "./index.html",
                template: "./index.ejs"
            })
        ],
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"],
                    plugins: []
                }
            }, {
                test: /\.style\.less$/,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {importLoaders: 1}},
                    "less-loader"
                ]
            }, {
                test: /\.tpl\.html$/,
                loader: "html-loader"
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }]
        },
        devServer: {
            contentBase: defaultConfig.dist,
            compress: true,
            port: 9000
        }
    }
};

module.exports = config;