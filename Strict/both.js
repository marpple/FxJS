import curry2 from "./curry2.js";
import and from "./and.js";
import useWith from "./useWith.js";

export default curry2(function both(f1, f2, ...args) {
  return useWith(and, [f1, f2])(...args);
});