import find from "./find.js";
import isMatch from "./isMatch.js";
import curry from "./curry.js";

export default curry(function findWhere(w, iter) {
  return find(isMatch(w), iter);
});
