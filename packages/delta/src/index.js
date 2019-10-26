const { version } = require("../package.json");

console.log("hello from delta version", version);

export default `Delta ${version}`;
