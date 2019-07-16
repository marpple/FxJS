import curry from "../Strict/curry.js";
import map from "../Strict/map.js";
import go1 from "../Strict/go1.js";
import go from "../Strict/go.js";
import rejectLazy from './rejectLazy.js';

export default curry(function differenceByLazy(f, iter2, iter) {
  let set;
  return rejectLazy(a => go1(
    set || go1(map(f, iter2), b => set = new Set(b)),
    set => go(a, f, b => set.has(b))
  ), iter);
});