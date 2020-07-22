import curry from "./curry.js";
import go from "./go.js";
import identity from "./identity.js";
import reduce from "./reduce.js";
import mapL from "../Lazy/mapL.js";
import takeUntilL from "../Lazy/takeUntilL.js";

export default curry(function some(f, iter) {
  return go(
    mapL(f, iter),
    takeUntilL(identity),
    reduce((a, b) => a || b),
    (a = false) => a,
    Boolean
  );
});
