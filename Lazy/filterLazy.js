import curry from "../curry.js";
import go1 from "../go1.js";
import nop from "../nop.js";
import safety from "../safety.js";

export default curry(function *filterLazy(f, iter) {
  for (const a of safety(iter)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop));
    else if (b) yield a;
  }
});