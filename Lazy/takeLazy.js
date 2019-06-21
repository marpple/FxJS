import curry from "../curry.js";
import safety from "../safety.js";
import noop from "../noop.js";
import nop from "../nop.js";

const resolved = Promise.resolve();
export default curry(function* takeLazy(l, iter) {
  if (l < 1) return;
  let prev = resolved;
  for (const a of safety(iter)) {
    if (a instanceof Promise) {
      a.catch(noop);
      yield prev = prev.then(_ => a).then(a => --l > -1 ? a : Promise.reject(nop));
      prev = prev.catch(noop);
    } else {
      yield (--l, a);
    }
    if (!l) break;
  }
});