import curry from "./curry.js";
import map from "./map.js";
import apply from "./apply.js";

export default curry(function useWith(fn, fns) {
  return (...args) => apply(fn, map(f => f(...args), fns));
});