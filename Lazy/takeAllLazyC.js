import toIter from "../Strict/toIter.js";
import go from "../Strict/go.js";
import rangeL from "../Lazy/rangeLazy.js";
import mapL from "../Lazy/mapLazy.js";
import takeUntilL from "../Lazy/takeUntilLazy.js";
import reject from "../Strict/reject.js";
import flatMapL from "../Lazy/flatMapLazy.js";
import catchNoopIter from "../.internal/catchNoopIter.js";

export default function takeCL(n, iter) {
  if (arguments.length == 1) return typeof n == 'number' ? _ => takeCL(n, _) : n;
  if (n == Infinity) return iter;

  iter = toIter(iter);
  return go(
    rangeL(Infinity),
    mapL(_ => go(
      rangeL(n),
      mapL(_ => iter.next()),
      reject(a => a.done),
      catchNoopIter
    )),
    takeUntilL(a => a.length < n),
    flatMapL(mapL(a => a.value)));
}