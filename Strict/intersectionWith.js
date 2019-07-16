import curry from "./curry.js";
import intersectionWithLazy from "../Lazy/intersectionWithLazy.js";
import takeAll from "./takeAll.js";

export default curry(function intersectionWith(f, iter1, iter2) {
  return takeAll(intersectionWithLazy(f, iter1, iter2));
});