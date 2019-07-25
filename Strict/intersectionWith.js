import curry2 from "./curry2.js";
import intersectionWithLazy from "../Lazy/intersectionWithLazy.js";
import takeAll from "./takeAll.js";

export default curry2(function intersectionWith(f, iter1, iter2) {
  return takeAll(intersectionWithLazy(f, iter1, iter2));
});