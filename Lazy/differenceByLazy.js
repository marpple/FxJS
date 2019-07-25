import curry2 from "../Strict/curry2.js";
import map from "../Strict/map.js";
import go1 from "../Strict/go1.js";
import go from "../Strict/go.js";
import rejectLazy from './rejectLazy.js';

export default curry2(function differenceByLazy(f, iter2, iter1) {
  let set;
  return rejectLazy(a => go1(
    set || go1(map(f, iter2), b => set = new Set(b)),
    set => go(a, f, b => set.has(b))
  ), iter1);
});