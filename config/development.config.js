const path = require("path");
const defaultConfig = require("./default.config");

const config = {
    webpack: {
        context: defaultConfig.src,
        devtool: "eval",
        entry: {
            "angular-webpack-template": ["./app.js"]
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
            modules: ["dev-src", "node_modules"],
            mainFiles: ["index"],
            extensions: [".less", ".js"]
        },
        plugins: [
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
            }]
        }
    }
};

module.exports = config;