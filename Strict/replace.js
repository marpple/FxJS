import curry2 from "./curry2.js";

export default curry2(function replace(pattern, replacement, str) {
  return str.replace(pattern, replacement);
});
