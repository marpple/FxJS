import curry2 from "./curry2.js";
import sel from "./sel.js";

export default curry2(function selEquals(selector, v, obj) {
  return sel(selector, obj) === v;
});
