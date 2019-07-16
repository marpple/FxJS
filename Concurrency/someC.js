import curry from "../Strict/curry.js";
import mapLazy from "../Lazy/mapLazy.js";
import takeUntilLazy from "../Lazy/takeUntilLazy.js";
import identity from "../Strict/identity.js";
import reduceC from "./reduceC.js";
import go from "../Strict/go.js";

export default curry(function someC(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(identity),
    reduceC((a, b) => a || b),
    (a = false) => a,
    Boolean);
});