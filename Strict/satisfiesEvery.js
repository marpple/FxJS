import curry from "./curry.js";
import every from "./every.js";

export default curry(function satisfiesEvery(fns, ...args) {
  return every((f) => f(...args), fns);
});
