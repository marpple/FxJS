import curry from "./curry.js";
import go from "./go.js";
import { mapLazy, takeUntilLazy } from "./L.js";
import reduce from "./reduce.js";
import not from "./not.js";

export default curry(function every(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(not),
    reduce((a, b) => a && b),
    (a = false) => a,
    Boolean);
});