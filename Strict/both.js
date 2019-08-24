import apply from "./apply.js";
import curry2 from "./curry2.js";
import and from "./and.js";
import juxt from "./juxt.js";

export default curry2(function both(f1, f2, ...args) {
  return apply(and, juxt(f1, f2)(...args));
});