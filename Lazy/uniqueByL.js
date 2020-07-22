import curry from "../Strict/curry.js";
import go1 from "../Strict/go1.js";
import pipe from "../Strict/pipe.js";
import filterL from "./filterL.js";

export default curry(function uniqueByL(f, iter) {
  const s = new Set();
  return go1(iter, filterL(pipe(f, (b) => (s.has(b) ? false : s.add(b)))));
});
