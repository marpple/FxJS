import curry from "../curry.js";
import mapLazy from './mapLazy.js';

export default curry(function *differenceByLazy(f, a, b) {
  const set = new Set(mapLazy(f, b));
  for (const item of a) {
    if (!set.has(f(item))) yield item;
  }
});