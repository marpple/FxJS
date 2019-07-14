import curry from "../curry.js";
import mapLazy from "../Lazy/mapLazy.js";
import takeUntilLazy from "../Lazy/takeUntilLazy.js";
import identity from "../identity.js";
import reduceC from "./reduceC.js";
import go from "../go.js";

export default curry(function someC(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(identity),
    reduceC((a, b) => a || b),
    (a = false) => a,
    Boolean);
});