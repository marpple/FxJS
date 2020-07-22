import curry2 from "./curry2.js";
import insertL from "../Lazy/insertL.js";
import takeAll from "./takeAll.js";

export default curry2(function insert(index, item, iter) {
  return takeAll(insertL(index, item, iter));
});
