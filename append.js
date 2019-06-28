import curry from "./curry.js";
import takeAll from "./takeAll.js";
import appendLazy from "./Lazy/appendLazy.js";

export default curry(function append(a, iter) {
  return takeAll(appendLazy(a, iter));
});