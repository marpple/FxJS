import filterLazy from "./Lazy/filterLazy.js";
import take1 from "./take1.js";
import go1 from "./go1.js";
import curry from "./curry.js";

export default curry(function some(f, iter) {
  return go1(take1(filterLazy(f, iter)), ({length}) => length == 1);
});