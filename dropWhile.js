import dropWhileLazy from "./Lazy/dropWhileLazy.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";
import go1 from "./go1.js";

export default curry(function dropWhile(f, iter) {
  return go1(iter, _iter => takeAll(dropWhileLazy(f, _iter)));
});