import curry from "../Strict/curry.js";
import nop from "../Strict/nop.js";
import go1 from "../Strict/go1.js";
import toIter from "../Strict/toIter.js";
import noop from "../Strict/noop.js";

const resolved = Promise.resolve();
export default curry(function* takeWhileL(f, iter) {
  let prev = resolved,
    ok = true;
  for (const a of toIter(iter)) {
    const _ok = ok && go1(a, f);
    if (_ok instanceof Promise) {
      _ok.catch(noop);
      yield (prev = prev
        .then((_) => _ok)
        .then((_ok) => ((ok = _ok) ? a : Promise.reject(nop))));
      prev = prev.catch(noop);
    } else if ((ok = _ok)) {
      yield a;
    }
    if (!ok) break;
  }
});
