import curry2 from "./curry2.js";
import takeAll from "./takeAll.js";
import unionWithL from "../Lazy/unionWithL.js";

export default curry2(function unionWith(f, iter1, iter2) {
  return takeAll(unionWithL(f, iter1, iter2));
});
