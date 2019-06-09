import curry from "../curry.js";
import nop from "../nop.js";
import go1 from "../go1.js";
import safety from "../safety.js";
import toIter from "../toIter.js";

export default curry(function *dropUntilLazy(f, iter) {
  iter = toIter(safety(iter));
  for (const a of iter) {
    let stop = go1(a, f);
    if (stop instanceof Promise) {
      yield stop.then(s => (stop = s, Promise.reject(nop)));
    }
    if (stop) break;
  }
  yield* iter;
});