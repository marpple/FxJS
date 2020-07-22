import curry from "../Strict/curry.js";
import go1 from "../Strict/go1.js";
import nop from "../Strict/nop.js";
import toIter from "../Strict/toIter.js";

export default curry(function* filterL(f, iter) {
  for (const a of toIter(iter)) {
    const b = go1(a, f);
    if (b instanceof Promise)
      yield b.then((b) => (b ? a : Promise.reject(nop)));
    else if (b) yield a;
  }
});
