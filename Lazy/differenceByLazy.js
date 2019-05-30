import curry from "../curry.js";
import map from '../map.js';

export default curry(function *differenceByLazy(f, a, b) {
  console.log(f, a, b);
  const set = new Set(map(f, b));
  for (const item of a) {
    if (!set.has(f(item))) yield item;
  }
});