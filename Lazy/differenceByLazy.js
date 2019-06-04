import curry from "../curry.js";
import map from "../map.js";
import go1 from "../go1.js";
import go from "../go.js";
import rejectLazy from './rejectLazy.js';

export default curry(function differenceByLazy(f, iter2, iter) {
  let set;
  return rejectLazy(a => go1(
    set || go1(map(f, iter2), b => set = new Set(b)),
    set => go(a, f, b => set.has(b))
  ), iter);
});