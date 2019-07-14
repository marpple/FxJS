import curry from "../curry.js";
import go from "../go.js";
import mapLazy from "../Lazy/mapLazy.js";
import takeUntilLazy from "../Lazy/takeUntilLazy.js";
import reduceC from "./reduceC.js";
import not from "../not.js";

export default curry(function everyC(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(not),
    reduceC((a, b) => a && b),
    (a = false) => a,
    Boolean);
});