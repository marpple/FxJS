import curry from "./curry.js";
import go from "./go.js";
import select from "./sel.js";

export default curry(function selSatisfies(f, selector, obj) {
  return go(obj, select(selector), f, Boolean);
});