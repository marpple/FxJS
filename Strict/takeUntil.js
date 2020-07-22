import toIter from "./toIter.js";
import go1 from "./go1.js";
import nop from "./nop.js";
import curry from "./curry.js";

export default curry(function takeUntil(f, iter) {
  let res = [];
  iter = toIter(iter);
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      const b = go1(a, (a) => (res.push(a), f(a, res)));
      if (b instanceof Promise)
        return b
          .then((b) => (b ? res : recur()))
          .catch((e) => (e == nop ? recur() : Promise.reject(e)));
      if (b) break;
    }
    return res;
  })();
});
