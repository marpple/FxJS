import curry from "./curry.js";

export default curry(function undefinedTo(a, b) {
  return b === undefined ? a : b;
});
