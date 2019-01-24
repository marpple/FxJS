import curry from "../curry.js";
import go1 from "../go1.js";
import safety from "../safety.js";

export default curry(function *takeUntilLazy(f, iter) {
  let ok = false;
  for (const a of safety(iter)) {
    ok = go1(a, f);
    if (ok instanceof Promise) yield ok.then(_ok => ((ok = _ok), a));
    else yield a;
    if (ok) break;
  }
});