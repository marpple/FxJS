import apply from "./apply.js";
import curry2 from "./curry2.js";
import or from "./or.js";
import juxt from "./juxt.js";

export default curry2(function either(f1, f2, ...args) {
  return apply(or, juxt([f1, f2])(...args));
});