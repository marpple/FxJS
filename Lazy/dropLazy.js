import curry from "../curry.js";
import toIter from "../toIter.js";
import noop from "../noop.js";
import nop from "../nop.js";

export default curry(function* dropLazy(l, iter) {
  if (l < 1) yield* iter;
  let prev = Promise.resolve();
  let i = 0;
  iter = toIter(iter);
  for(const a of iter) {
    if (a instanceof Promise) {
      a.catch(noop);
      yield prev = prev
        .then(_ => a)
        .then(b => ++i > l ? b : Promise.reject(nop));
      prev = prev.catch(noop);
    } else if (++i == l) return yield* iter;
  }
});