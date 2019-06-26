import curry from "../curry.js";
import go1 from "../go1.js";
import toIter from "../toIter.js";

export default curry(function* mapEntriesLazy(f, iter) {
  for (const [k, a] of toIter(iter)) yield go1(go1(a, f), b => [k, b]);
});