import curry from "../Strict/curry.js";
import go from "../Strict/go.js";
import mapL from "../Lazy/mapL.js";
import takeUntilL from "../Lazy/takeUntilL.js";
import reduceC from "./reduceC.js";
import not from "../Strict/not.js";

export default curry(function everyC(f, iter) {
  return go(
    mapL(f, iter),
    takeUntilL(not),
    reduceC((a, b) => a && b),
    (a = false) => a,
    Boolean
  );
});
