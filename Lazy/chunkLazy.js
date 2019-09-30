import curry from "../Strict/curry.js";
import toIter from "../Strict/toIter.js";
import go from "../Strict/go.js";
import take from "../Strict/take.js";
import rangeL from "./rangeLazy.js";
import mapL from "./mapLazy.js";
import takeWhileL from "./takeWhileLazy.js";

export default curry(function chunkL(n, iter) {
  iter = toIter(iter);
  return go(
    rangeL(Infinity),
    mapL(_ => take(n, iter)),
    takeWhileL(c => c.length))
});