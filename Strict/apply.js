import curry from "./curry.js";

export default curry(function apply(f, iter) {
  return f(...iter);
});
