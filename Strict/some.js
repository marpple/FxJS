import curry from "./curry.js";
import go from "./go.js";
import { map as mapLazy, takeUntil as takeUntilLazy } from "../Lazy/index.js";
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