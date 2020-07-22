import toIter from "./toIter.js";
import curry from "./curry.js";
import go1 from "./go1.js";
import nop from "./nop.js";

export default curry(function takeWhile(f, iter) {
  let res = [];
  iter = toIter(iter);
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      const b = go1(a, (a) => f(a, res));
      if (!b) return res;
      if (b instanceof Promise) {
        return b
          .then(async (b) => (b ? (res.push(await a), recur()) : res))
          .catch((e) => (e == nop ? recur() : Promise.reject(e)));
      }
      res.push(a);
    }
    return res;
  })();
});
