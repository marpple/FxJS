import curry from "../curry.js";
import go1 from "../go1.js";
import safety from "../safety.js";

export default curry(function* mapEntriesLazy(f, iter) {
  for (const [k, a] of safety(iter)) yield go1(go1(a, f), b => [k, b]);
});