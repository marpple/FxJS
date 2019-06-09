import curry from "./curry.js";
import reduce from "./reduce.js";
import go1 from "./go1.js";

function pushSel(parent, k, v) {
  (parent[k] || (parent[k] = [])).push(v);
  return parent;
}

export default curry(function groupBy(f, iter) {
  return reduce(
    (group, a) =>
      go1(f(a), b => pushSel(group, b, a)),
    {},
    iter);
});