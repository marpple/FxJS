import rejectLazy from "./rejectLazy.js";
import curry2 from "../Strict/curry2.js";
import someBy from "../Strict/someBy.js";

export default curry2(function differenceWithLazy(f, iter1, iter2) {
  return rejectLazy(a => someBy(b => f(a, b), iter2), iter1);
});