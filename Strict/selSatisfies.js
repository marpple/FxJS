import curry2 from "./curry2.js";
import go from "./go.js";
import select from "./sel.js";

export default curry2(function selSatisfies(f, selector, obj) {
  return go(obj, select(selector), f, Boolean);
});
