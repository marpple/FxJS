import go2 from "../_internal/go2.js";
import go1 from "./go1.js";
import toIter from "./toIter.js";
import head from "./head.js";
import isStop from "./isStop.js";

export default function reduceS(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduceS(f, ..._);
  if (arguments.length == 2)
    return reduceS(f, head((iter = toIter(acc))), iter);

  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    let cur;
    while (!isStop(acc) && !(cur = iter.next()).done) {
      acc = go2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return isStop(acc) ? acc.value : acc;
  });
}
