import curry from "./curry.js";
import map from "./map.js";

export default curry(function juxt(fns, ...args) {
  return map(f => f(...args), fns);
});