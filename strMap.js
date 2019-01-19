import reduce from "./reduce.js";
import mapLazy from "./Lazy/mapLazy.js";
import curry from "./curry.js";

export const smap = curry(function strMap(f, iter) {
  return reduce((a, b) => `${a}${b}`, '', mapLazy(f, iter));
});

export default smap;