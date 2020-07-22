import curry from "./curry.js";
import map from "./map.js";

export default curry(function pluck(k, iter) {
  return map((a) => a[k], iter);
});
