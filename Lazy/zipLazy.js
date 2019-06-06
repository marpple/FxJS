import map from "../map.js";
import toIter from '../toIter.js';
import curry from '../curry.js';
import go from "../go.js";
import mapLazy from "./mapLazy.js";
import rangeLazy from "./rangeLazy.js";
import takeWhileLazy from "./takeWhileLazy.js";
import some from "../some.js";

export default curry(function zipLazy(...iterables) {
  const iterators = map(toIter, iterables);
  return go(
    rangeLazy(Infinity),
    mapLazy(_ => map(it => it.next(), iterators)),
    takeWhileLazy(some(cur => !cur.done)),
    mapLazy(map(cur => cur.value)))
});