import curry from "./curry.js";
import reduce from "./reduce.js";

export default curry(function join(sep, iter) {
  return reduce((acc, a) => `${acc}${sep}${a}`, iter);
});
