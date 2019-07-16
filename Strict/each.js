import go1 from "./go1.js";
import reduce from "./reduce.js";
import curry from "./curry.js";

export default curry(function each(f, iter) {
  return go1(reduce((_, a) => f(a), null, iter), _ => iter);
});