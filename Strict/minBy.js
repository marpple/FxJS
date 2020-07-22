import curry from "./curry.js";
import reduce from "./reduce.js";

export default curry(function minBy(f, iter) {
  return reduce((a, b) => (f(a) <= f(b) ? a : b), iter);
});
