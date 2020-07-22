import curry2 from "./curry2.js";
import intersectionWithL from "../Lazy/intersectionWithL.js";
import takeAll from "./takeAll.js";

export default curry2(function intersectionWith(f, iter1, iter2) {
  return takeAll(intersectionWithL(f, iter1, iter2));
});
