import curry from "./curry.js";

export default curry(function lt(a, b) {
  return a < b;
});
