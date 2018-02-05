const {env} = require("yargs").argv;

module.exports = require(`./environment/${env}.config`).webpack;
