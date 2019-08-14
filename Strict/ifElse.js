import curry3 from "./curry3.js";
import go1 from "./go1.js";

export default curry3(function ifElse(cond, t, f, v) {
  return go1(cond(v), b => b ? t(v) : f(v));
});