import differenceWithLazy from "../Lazy/differenceWithLazy.js";
import curry2 from "./curry2.js";
import takeAll from "./takeAll.js";

export default curry2(function differenceWith(f, iter1, iter2) {
  return takeAll(differenceWithLazy(f, iter1, iter2));
});