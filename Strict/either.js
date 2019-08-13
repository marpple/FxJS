import curry2 from "./curry2.js";
import or from "./or.js";
import useWith from "./useWith.js";

export default curry2(function either(f1, f2, ...args) {
  return useWith(or, [f1, f2])(...args);
});