import filterLazy from "./filterLazy.js";
import curry2 from "../Strict/curry2.js";
import take from "../Strict/take.js";
import go1 from "../Strict/go1.js";


export default curry2(function intersectionWithLazy(f, iter1, iter2) {
  return filterLazy(
    a => go1(take(1, filterLazy(b => f(a, b), iter2)), b => b.length),
    iter1);
});