import React from "React";
import gamma from "vnglst-gamma";
import delta from "vnglst-delta";
import { version } from "../package.json";

console.log("hello from demo version", version);

export default `Demo! React ${React.version} ${gamma} ${delta}`;
