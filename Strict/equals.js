import curry from "./curry.js";

export default curry(function equals(a, b) {
  return a === b;
});
