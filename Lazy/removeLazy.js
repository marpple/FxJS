import curry from "../Strict/curry.js";
import ipp from "./zipWithIndex.js";
import rejectLazy from "./rejectLazy.js";
import mapLazy from "./mapLazy.js";
import last from "../Strict/last.js";
import go from "../Strict/go.js";

export default curry(function removeLazy(start, count, iter) {
  if (count < 1) return iter;
  return go(
    iter,
    ipp,
    rejectLazy(([i]) => i >= start && i < (start + count)),
    mapLazy(last)
  );
});