import curry from "../Strict/curry.js";
import mapL from "../Lazy/mapLazy.js";
import takeUntilL from "../Lazy/takeUntilLazy.js";
import identity from "../Strict/identity.js";
import reduceC from "./reduceC.js";
import go from "../Strict/go.js";

export default curry(function someC(f, iter) {
  return go(
    mapL(f, iter),
    takeUntilL(identity),
    reduceC((a, b) => a || b),
    (a = false) => a,
    Boolean);
});