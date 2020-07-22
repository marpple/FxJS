import curry from "./curry.js";
import toIter from "./toIter.js";
import nop from "./nop.js";

export default curry(function take(l, iter) {
  if (l < 1) return [];
  let res = [];
  iter = toIter(iter);
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then((a) => ((res.push(a), res).length == l ? res : recur()))
          .catch((e) => (e == nop ? recur() : Promise.reject(e)));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  })();
});
