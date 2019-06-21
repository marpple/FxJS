import curry from "../curry.js";
import nop from "../nop.js";
import go1 from "../go1.js";
import safety from "../safety.js";
import noop from "../noop.js";

const resolved = Promise.resolve();
export default curry(function* takeWhileLazy(f, iter) {
  let prev = resolved, ok = true;
  for (const a of safety(iter)) {
    const _ok = ok && go1(a, f);
    if (_ok instanceof Promise) {
      _ok.catch(noop);
      yield prev = prev.then(_ => _ok).then(_ok => (ok = _ok) ? a : Promise.reject(nop));
      prev = prev.catch(noop);
    } else if (ok = _ok) {
      yield a;
    }
    if (!ok) break;
  }
});