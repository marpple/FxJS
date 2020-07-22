import curry from "../Strict/curry.js";
import go1 from "../Strict/go1.js";
import toIter from "../Strict/toIter.js";

export default curry(function* mapL(f, iter) {
  for (const a of toIter(iter)) yield go1(a, f);
});
