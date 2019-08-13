import curry from "./curry.js";
import go from "./go.js";
import reduce from "./reduce.js";
import not from "./not.js";
import mapLazy from "../Lazy/mapLazy.js";
import takeUntilLazy from "../Lazy/takeUntilLazy.js";

export default curry(function everyBy(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(not),
    reduce((a, b) => a && b),
    (a = false) => a,
    Boolean);
});