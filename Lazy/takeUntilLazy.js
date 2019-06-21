import curry from "../curry.js";
import go1 from "../go1.js";
import safety from "../safety.js";
import noop from "../noop.js";
import nop from "../nop.js";

const resolved = Promise.resolve();
export default curry(function* takeUntilLazy(f, iter) {
  let prev = resolved, ok = false;
  for (const a of safety(iter)) {
    const _ok = ok || go1(a, f);
    if (_ok instanceof Promise) {
      _ok.catch(noop);
      yield prev = prev.then(_ => _ok).then(_ok => ok ? Promise.reject(nop) : ((ok = _ok), a));
      prev = prev.catch(noop);
    } else {
      ok = _ok;
      yield a;
    }
    if (ok) break;
  }
});