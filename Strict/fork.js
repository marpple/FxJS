import curry3 from "./curry3.js";
import apply from "./apply.js";
import juxt from "./juxt.js";

export default curry3(function fork(join, f1, f2, ...args) {
  return apply(join, juxt(f1, f2)(...args));
});