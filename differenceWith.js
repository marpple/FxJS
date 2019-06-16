import differenceWithLazy from "./Lazy/differenceWithLazy.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function differenceWith(f, iter1, iter2) {
  return takeAll(differenceWithLazy(f, iter1, iter2));
});