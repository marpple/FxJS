import filterLazy from './filterLazy.js';
import mapLazy from './mapLazy.js';
import uniqueLazy from './uniqueLazy';
import curry from "../curry.js";
import go1 from '../go1.js';
import go from '../go.js';

export default curry(function intersectionByLazy(f, iter2, iter) {
  let set = null;
  return uniqueLazy(
    filterLazy(
      a => go1(
        set || go1(mapLazy(f, iter2), l => set = new Set(l)),
        set => go(a, f, b => set.has(b))
      ),
      iter));
});