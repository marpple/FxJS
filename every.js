import rejectLazy from "./Lazy/rejectLazy.js";
import take1 from "./take1.js";
import go1 from "./go1.js";
import curry from "./curry.js";

export default curry(function every(f, iter) {
  return go1(take1(rejectLazy(f, iter)), ({length}) => length == 0);
});