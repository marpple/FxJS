import curry from "./curry.js";
import takeAll from "./takeAll.js";
import uniqueWithLazy from "../Lazy/uniqueWithLazy.js";

export default curry(function uniqueWith(f, iter) {
  return takeAll(uniqueWithLazy(f, iter));
});