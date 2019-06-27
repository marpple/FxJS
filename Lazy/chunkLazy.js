import curry from "../curry.js";
import toIter from "../toIter.js";
import go from "../go.js";
import take from "../take.js";
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