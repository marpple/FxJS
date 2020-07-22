import rejectL from "./rejectL.js";
import curry2 from "../Strict/curry2.js";
import some from "../Strict/some.js";

export default curry2(function differenceWithL(f, iter1, iter2) {
  return rejectL((a) => some((b) => f(a, b), iter2), iter1);
});
