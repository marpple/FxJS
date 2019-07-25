import rejectLazy from "./rejectLazy.js";
import curry from "../Strict/curry.js";
import some from "../Strict/some.js";

export default curry(function differenceWithLazy(f, iter1, iter2) {
  return rejectLazy(a => some(b => f(a, b), iter2), iter1);
});