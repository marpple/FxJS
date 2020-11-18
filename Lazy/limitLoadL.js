import toIter from "../Strict/toIter.js";
import go from "../Strict/go.js";
import rangeL from "./rangeL.js";
import mapL from "./mapL.js";
import takeUntilL from "./takeUntilL.js";
import reject from "../Strict/reject.js";
import flatMapL from "./flatMapL.js";
import catchNoopIter from "../_internal/catchNoopIter.js";

export default function limitLoadL(n, iter) {
  if (arguments.length == 1)
    return typeof n == "number" ? (_) => limitLoadL(n, _) : n;
  if (n == Infinity) return iter;

  iter = toIter(iter);
  return go(
    rangeL(Infinity),
    mapL((_) =>
      go(
        rangeL(n),
        mapL((_) => iter.next()),
        reject((a) => a.done),
        catchNoopIter
      )
    ),
    takeUntilL((a) => a.length < n),
    flatMapL(mapL((a) => a.value))
  );
}
