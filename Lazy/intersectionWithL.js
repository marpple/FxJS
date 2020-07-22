import filterL from "./filterL.js";
import curry2 from "../Strict/curry2.js";
import take from "../Strict/take.js";
import go1 from "../Strict/go1.js";

export default curry2(function intersectionWithL(f, iter1, iter2) {
  return filterL(
    (a) =>
      go1(
        take(
          1,
          filterL((b) => f(a, b), iter2)
        ),
        (b) => b.length
      ),
    iter1
  );
});
