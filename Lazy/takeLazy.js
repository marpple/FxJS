import curry from "../curry.js";
import safety from "../safety.js";
import nop from "../nop.js";

export default curry(function *takeLazy(l, iter) {
  if (l < 1) return;
  for (const a of safety(iter)) {
    yield a instanceof Promise ? a.then(a => (--l > -1 ? a : Promise.reject(nop))) : (--l, a);
    if (!l) break;
  }
});