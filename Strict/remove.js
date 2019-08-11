import curry from "./curry.js";
import takeAll from "./takeAll.js";
import go from "./go.js";
import map from "./map.js";
import append from "./append.js";
import apply from "./apply.js";
import removeLazy from "../Lazy/removeLazy.js";

export default curry(function remove(start, end, iter) {
  if (iter === undefined) return remove(start, (start + 1) || Infinity, end);
  if (start < 0 || end < 0) {
    iter = Array.from(iter);
  }
  return go(
    [start, end],
    map(i => i < 0 ? (i + iter.length) : i),
    append(iter),
    apply(removeLazy),
    takeAll);
});