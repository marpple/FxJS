import curry from "./curry.js";
import extend from "./extend.js";
import reverse from "./reverse.js";
import go from "./go.js";

const extendRight = (...objs) => go(
  objs,
  reverse,
  apply(extend)
);
export default curry(extendRight);