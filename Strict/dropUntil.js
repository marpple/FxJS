import dropUntilLazy from "../Lazy/dropUntilLazy.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function dropWhile(f, iter) {
  return takeAll(dropUntilLazy(f, iter));
});