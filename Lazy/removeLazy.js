import curry from "../Strict/curry.js";
import ipp from "./zipWithIndex.js";
import rejectL from "./rejectLazy.js";
import mapL from "./mapLazy.js";
import last from "../Strict/last.js";
import go from "../Strict/go.js";

export default curry(function removeL(start, count, iter) {
  if (count < 1) return iter;
  return go(
    iter,
    ipp,
    rejectL(([i]) => i >= start && i < (start + count)),
    mapL(last)
  );
});