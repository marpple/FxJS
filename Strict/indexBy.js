import curry from "./curry.js";
import reduce from "./reduce.js";

export default curry(function indexBy(f, iter) {
  return reduce((obj, a) => ((obj[f(a)] = a), obj), {}, iter);
});
