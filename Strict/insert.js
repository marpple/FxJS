import curry2 from "./curry2.js";
import insertLazy from "../Lazy/insertLazy.js";
import takeAll from "./takeAll.js";

export default curry2(function insert(index, item, iter) {
  return takeAll(insertLazy(index, item, iter));
});