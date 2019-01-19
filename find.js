import head from './head.js';
import filterLazy from "./Lazy/filterLazy.js";
import curry from "./curry.js";

export default curry(function find(f, iter) {
  return head(filterLazy(f, iter));
});