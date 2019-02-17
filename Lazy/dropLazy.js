import curry from "../curry.js";
import safety from "../safety.js";
import nop from "../nop.js";

export default curry(function *dropLazy(l, iter) {
  for (const a of safety(iter)) {
    if (a instanceof Promise) yield a.then(a => l ? (l--, Promise.reject(nop)) : a);
    else if (l) { l--; continue; }
    else yield a;
  }
});