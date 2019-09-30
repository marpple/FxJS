import curry from "./curry.js";
import takeAll from "./takeAll.js";
import uniqueWithL from "../Lazy/uniqueWithLazy.js";

export default curry(function uniqueWith(f, iter) {
  return takeAll(uniqueWithL(f, iter));
});