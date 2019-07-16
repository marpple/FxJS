import curry from "./curry.js";
import takeAll from "./takeAll.js";
import prependLazy from "../Lazy/prependLazy.js";

export default curry(function prepend(a, iter) {
  return takeAll(prependLazy(a, iter));
});