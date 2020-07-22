import curry from "../Strict/curry.js";
import go1 from "../Strict/go1.js";
import toIter from "../Strict/toIter.js";

export default curry(function* mapEntriesL(f, iter) {
  for (const [k, a] of toIter(iter)) yield go1(go1(a, f), (b) => [k, b]);
});
