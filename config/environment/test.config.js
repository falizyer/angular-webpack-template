const defaultConfig = require("../default.config");

const config = {
    webpack: {
        context: defaultConfig.src,
        devtool: "eval",
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
        }
    }
};

module.exports = config;