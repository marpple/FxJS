import rejectLazy from "./rejectLazy.js";
import filterLazy from "./filterLazy.js";
import curry from "../curry.js";
import take from "../take.js";
import go1 from "../go1.js";

export default curry(function differenceWithLazy(f, iter1, iter2) {
  return rejectLazy(
    a => go1(take(1, filterLazy(b => f(a, b), iter2)), b => b.length),
    iter1);
});