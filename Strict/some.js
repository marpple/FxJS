import curry from "./curry.js";
import go from "./go.js";
import identity from "./identity.js";
import reduce from "./reduce.js";
import mapLazy from "../Lazy/mapLazy.js";
import takeUntilLazy from "../Lazy/takeUntilLazy.js";

export default curry(function some(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(identity),
    reduce((a, b) => a || b),
    (a = false) => a,
    Boolean);
});