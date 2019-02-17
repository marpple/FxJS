import curry from "../curry.js";
import safety from "../safety.js";

export default curry(function *takeLazy(l, iter) {
  if (l < 1) return;
  for (const a of safety(iter)) {
    if (a instanceof Promise) yield a.then(a => (--l, a));
    else yield (--l, a);
    if (!l) break;
  }
});