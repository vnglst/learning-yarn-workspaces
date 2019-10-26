const { version } = require("../package.json");

console.log("hello from delta version NEW MAJOR", version);

export default `Delta ${version}`;
