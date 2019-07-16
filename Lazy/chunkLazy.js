import curry from "../Strict/curry.js";
import toIter from "../Strict/toIter.js";
import go from "../Strict/go.js";
import take from "../Strict/take.js";
import rangeLazy from "./rangeLazy.js";
import mapLazy from "./mapLazy.js";
import takeUntilLazy from "./takeUntilLazy.js";

export default curry(function chunkLazy(n, iter) {
  iter = toIter(iter);
  return go(
    rangeLazy(Infinity),
    mapLazy(_ => take(n, iter)),
    takeUntilLazy(c => c.length < n))
});