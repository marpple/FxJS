import curry from "../Strict/curry.js";
import toIter from "../Strict/toIter.js";
import noop from "../Strict/noop.js";
import nop from "../Strict/nop.js";

export default curry(function* takeL(l, iter) {
  if (l < 1) return;
  let prev = null;
  for (const a of toIter(iter)) {
    if (a instanceof Promise) {
      a.catch(noop);
      yield (prev = (prev || Promise.resolve())
        .then((_) => a)
        .then((a) => (--l > -1 ? a : Promise.reject(nop))));
      prev = prev.catch(noop);
    } else {
      yield (--l, a);
    }
    if (!l) break;
  }
});
