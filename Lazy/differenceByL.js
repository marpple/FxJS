import curry2 from "../Strict/curry2.js";
import map from "../Strict/map.js";
import go1 from "../Strict/go1.js";
import go from "../Strict/go.js";
import rejectL from "./rejectL.js";

export default curry2(function differenceByL(f, iter2, iter1) {
  let set;
  return rejectL(
    (a) =>
      go1(set || go1(map(f, iter2), (b) => (set = new Set(b))), (set) =>
        go(a, f, (b) => set.has(b))
      ),
    iter1
  );
});
