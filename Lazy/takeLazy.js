import curry from "../curry.js";

export default curry(function *takeLazy(l, iter) {
  for (const a of iter) {
    if (a instanceof Promise) yield a.then(a => (--l, a));
    else yield (--l, a);
    if (!l) break;
  }
});