import curry3 from "./curry3.js";
import apply from "./apply.js";
import juxt from "./juxt.js";
import go from "./go.js";

export default curry3(function fork(join, f1, f2, ...args) {
  return go(args, apply(juxt(f1, f2)), apply(join));
});
