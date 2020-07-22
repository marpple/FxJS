import curry from "../Strict/curry.js";
import toIter from "../Strict/toIter.js";
import noop from "../Strict/noop.js";
import nop from "../Strict/nop.js";

export default curry(function* dropL(l, iter) {
  if (l < 1) yield* iter;
  let prev = null,
    i = 0;
  iter = toIter(iter);
  for (const a of iter) {
    if (a instanceof Promise) {
      a.catch(noop);
      yield (prev = (prev || Promise.resolve())
        .then((_) => a)
        .then((b) => (++i > l ? b : Promise.reject(nop))));
      prev = prev.catch(noop);
    } else if (++i == l) return yield* iter;
  }
});
