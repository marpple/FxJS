import go1 from "../Strict/go1.js";
import curry from "../Strict/curry.js";
import toIter from "../Strict/toIter.js";
import noop from "../Strict/noop.js";
import nop from "../Strict/nop.js";
import flatL from "./flatL.js";

export default curry(function* dropWhileL(f, iter) {
  let prev = null,
    ok = false;
  iter = toIter(iter);
  for (const a of iter) {
    const cond = ok || go1(a, f);
    if (cond instanceof Promise) {
      cond.catch(noop);
      yield (prev = (prev || Promise.resolve())
        .then((_) => cond)
        .then((c) => ((ok = !c) ? a : Promise.reject(nop))));
      prev = prev.catch(noop);
    } else if (ok || (ok = !cond)) return yield* flatL([a, iter]);
  }
});
