import curry from "../curry.js";
import nop from "../nop.js";
import go1 from "../go1.js";
import safety from "../safety.js";
import toIter from "../toIter.js";

export default curry(function *dropWhileLazy(f, iter) {
  iter = toIter(safety(iter));
  let stop = false;
  for (const a of iter) {
    const drop = go1(a, f);
    if (drop instanceof Promise) {
      yield drop.then(d => d ? Promise.reject(nop) : (stop = true, a));
      if (stop) break;
    } else if (!drop) {
      yield a;
      break;
    }
  }
  yield* iter;
});