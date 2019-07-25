import curry from "../Strict/curry.js";
import go1 from "../Strict/go1.js";
import pipe from "../Strict/pipe.js";
import filterLazy from "./filterLazy.js";

export default curry(function uniqueByLazy(f, iter) {
  const s = new Set();
  return go1(
    iter,
    filterLazy(pipe(
      f,
      b => s.has(b) ? false : s.add(b))));
});