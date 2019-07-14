import curry from "./curry.js";
import go from "./go.js";
import { mapLazy, takeUntilLazy } from "./L.js";
import identity from "./identity.js";
import reduce from "./reduce.js";

export default curry(function some(f, iter) {
  return go(
    mapLazy(f, iter),
    takeUntilLazy(identity),
    reduce((a, b) => a || b),
    (a = false) => a,
    Boolean);
});