import curry from "../curry.js";
import toIter from "../toIter.js";
import go from "../go.js";
import take from "../take.js";
import rangeLazy from "./rangeLazy.js";
import mapLazy from "./mapLazy.js";
import takeWhileLazy from "./takeWhileLazy.js";

export default curry(function chunkLazy(n, iter) {
  iter = toIter(iter);
  return go(
    rangeLazy(Infinity),
    mapLazy(_ => take(n, iter)),
    takeWhileLazy(c => c.length))
});