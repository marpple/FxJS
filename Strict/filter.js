import filterLazy from "../Lazy/filterLazy.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function filter(f, iter) {
  return takeAll(filterLazy(f, iter));
});