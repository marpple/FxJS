import go1 from "../go1.js";
import curry from "../curry.js";
import toIter from "../toIter.js";
import noop from "../noop.js";
import nop from "../nop.js";

export default curry(function* dropUntilLazy(f, iter) {
  let prev = null, ok = false;
  iter = toIter(iter);
  for(const a of iter) {
    const cond = ok || go1(a, f);
    if (cond instanceof Promise) {
      cond.catch(noop);
      yield prev = (prev || Promise.resolve())
        .then(_ => cond)
        .then(c => ok ? a : (ok = c, Promise.reject(nop)));
      prev = prev.catch(noop);
    } else ok = cond;
    if (ok) return yield* iter;
  }
});