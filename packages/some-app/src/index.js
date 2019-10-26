import React from "React";
import gamma from "vnglst-gamma";
import delta from "vnglst-delta";

const { version } = require("../package.json");

console.log("hello from some app version", version);

export default `Some app: ${version}. React ${React.version}. Gamma: ${gamma}. Delta: ${delta}`;
