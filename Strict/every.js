import curry from "./curry.js";
import go from "./go.js";
import reduce from "./reduce.js";
import not from "./not.js";
import mapL from "../Lazy/mapL.js";
import takeUntilL from "../Lazy/takeUntilL.js";

export default curry(function every(f, iter) {
  return go(
    mapL(f, iter),
    takeUntilL(not),
    reduce((a, b) => a && b),
    (a = false) => a,
    Boolean
  );
});
