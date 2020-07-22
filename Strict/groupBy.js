import curry from "./curry.js";
import reduce from "./reduce.js";
import go1 from "./go1.js";

export default curry(function groupBy(f, iter) {
  return reduce(
    (group, a) =>
      go1(f(a), (k) => ((group[k] || (group[k] = [])).push(a), group)),
    {},
    iter
  );
});
