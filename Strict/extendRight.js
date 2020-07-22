import curry from "./curry.js";
import extend from "./extend.js";
import reverse from "./reverse.js";
import go from "./go.js";
import apply from "./apply.js";

const extendRight = (...objs) => go(objs, reverse, apply(extend));
export default curry(extendRight);
