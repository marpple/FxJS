import flatL from "./flatL.js";
import uniqueByL from "./uniqueByL.js";
import curry2 from "../Strict/curry2.js";
import go from "../Strict/go.js";

export default curry2(function unionByL(f, a, b) {
  return go([a, b], flatL, uniqueByL(f));
});
