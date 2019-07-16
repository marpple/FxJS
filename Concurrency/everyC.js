import curry from "../Strict/curry.js";
import go from "../Strict/go.js";
import mapLazy from "../Lazy/mapLazy.js";
import takeUntilLazy from "../Lazy/takeUntilLazy.js";
import reduceC from "./reduceC.js";
import not from "../Strict/not.js";

export default curry(function everyC(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(not),
    reduceC((a, b) => a && b),
    (a = false) => a,
    Boolean);
});