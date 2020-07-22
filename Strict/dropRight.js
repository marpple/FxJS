import curry from "./curry.js";
import takeAll from "./takeAll.js";
import go1 from "./go1.js";
import take from "./take.js";

export default curry(function dropRight(l, iter) {
  return go1(takeAll(iter), (arr) => take(arr.length - l, arr));
});
