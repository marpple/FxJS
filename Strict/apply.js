import curry from './curry.js';
import go1 from "./go1.js";

export default curry(function apply(f, iter) {
  return go1(iter, iter => f(...iter));
});