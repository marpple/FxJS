import curry from "./curry.js";
import reduce from "./reduce.js";

function incSel(parent, k) {
  parent[k] ? parent[k]++ : (parent[k] = 1);
  return parent;
}

export default curry(function countBy(f, iter) {
  return reduce((counts, a) => incSel(counts, f(a)), {}, iter);
});
