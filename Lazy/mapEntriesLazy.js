import curry from "../curry.js";
import go1 from "../go1.js";
import values from "./valuesLazy.js";

export default curry(function *mapEntriesLazy(f, coll) {
  for (const [k, a] of values(coll)) yield go1(go1(a, f), b => [k, b]);
});