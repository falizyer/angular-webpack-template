const path = require("path");

const config = {
    get root() {
        return path.resolve(__dirname, "../");
    },
    get dist() {
        return path.resolve(this.root, "./dist");
    },
    get src() {
        return path.resolve(this.root, "./src");
    },
    get node_modules() {
        return path.resolve(this.root, "./node_modules");
    }
};

module.exports = config;