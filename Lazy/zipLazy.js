import map from "../Strict/map.js";
import toIter from '../Strict/toIter.js';
import curry from '../Strict/curry.js';
import go from "../Strict/go.js";
import mapL from "./mapLazy.js";
import rangeL from "./rangeLazy.js";
import takeWhileL from "./takeWhileLazy.js";
import some from "../Strict/some.js";

export default curry(function zipL(...iterables) {
  const iterators = map(toIter, iterables);
  return go(
    rangeL(Infinity),
    mapL(_ => map(it => it.next(), iterators)),
    takeWhileL(some(cur => !cur.done)),
    mapL(map(cur => cur.value)))
});