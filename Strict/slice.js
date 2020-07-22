import curry from "./curry.js";
import takeAll from "./takeAll.js";
import go from "./go.js";
import map from "./map.js";
import append from "./append.js";
import apply from "./apply.js";
import sliceL from "../Lazy/sliceL.js";

export default curry(function slice(start, end, iter) {
  if (iter === undefined) return slice(start, Infinity, end);
  if (start < 0 || end < 0) {
    iter = Array.from(iter);
  }
  return go(
    [start, end],
    map((i) => (i < 0 ? i + iter.length : i)),
    append(iter),
    apply(sliceL),
    takeAll
  );
});
