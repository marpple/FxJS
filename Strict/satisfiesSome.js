import curry from "./curry.js";
import some from "./some.js";

export default curry(function satisfiesSome(fns, ...args) {
  return some((f) => f(...args), fns);
});
