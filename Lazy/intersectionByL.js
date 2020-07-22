import filterL from "./filterL.js";
import mapL from "./mapL.js";
import uniqueL from "./uniqueL.js";
import curry2 from "../Strict/curry2.js";
import go1 from "../Strict/go1.js";
import go from "../Strict/go.js";

export default curry2(function intersectionByL(f, iter2, iter1) {
  let set = null;
  return uniqueL(
    filterL(
      (a) =>
        go1(set || go1(mapL(f, iter2), (l) => (set = new Set(l))), (set) =>
          go(a, f, (b) => set.has(b))
        ),
      iter1
    )
  );
});
