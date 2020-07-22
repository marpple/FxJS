import go1 from "./go1.js";
import map from "./map.js";
import curry from "./curry.js";

export default curry(function each(f, iter) {
  return map((a) => go1(f(a), (_) => a), iter);
});
