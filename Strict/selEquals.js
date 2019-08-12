import curry from "./curry.js";
import sel from "./sel.js";

export default curry(function selEquals(selector, v, obj) {
  return sel(selector, obj) === v;
});