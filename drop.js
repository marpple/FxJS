import curry from "./curry.js";
import takeAll from "./takeAll.js";
import dropLazy from "./Lazy/dropLazy.js";

export default curry(function drop(l, iter) {
  return takeAll(dropLazy(l, iter));
});