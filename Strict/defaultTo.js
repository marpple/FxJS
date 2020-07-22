import curry from "./curry.js";

export default curry(function defaultTo(a, b) {
  return b == null || Number.isNaN(b) ? a : b;
});
