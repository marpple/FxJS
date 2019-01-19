import curry from "./curry.js";
import reduce from "./reduce.js";

function pushSel(parent, k, v) {
  (parent[k] || (parent[k] = [])).push(v);
  return parent;
}

export default curry(function groupBy(f, iter) {
  return reduce((group, a) => pushSel(group, f(a), a), {}, iter);
});