import baseSortBy from "../_internal/baseSortBy.js";
import curry from "./curry.js";

export default curry(function sortByDesc(f, arr) {
  return baseSortBy(1, -1, f, arr);
});
