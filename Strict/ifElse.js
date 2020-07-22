import curry3 from "./curry3.js";
import go1 from "./go1.js";

export default curry3(function ifElse(cond, t, f, ...args) {
  return go1(cond(...args), (b) => (b ? t(...args) : f(...args)));
});
