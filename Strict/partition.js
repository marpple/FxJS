import curry from "./curry.js";
import groupBy from "./groupBy.js";
import go1 from "./go1.js";
import pipe1 from "./pipe1.js";

export default curry(function partition(f, iter) {
  return go1(groupBy(pipe1(f, Boolean), iter), (group) => [
    group["true"] || [],
    group["false"] || [],
  ]);
});
