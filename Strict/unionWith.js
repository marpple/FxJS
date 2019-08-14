import curry2 from "./curry2.js";
import takeAll from "./takeAll.js";
import unionWithLazy from "../Lazy/unionWithLazy.js";

export default curry2(function unionWith(f, iter1, iter2) {
  return takeAll(unionWithLazy(f, iter1, iter2));
});