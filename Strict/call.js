import curry from "./curry.js";

export default curry(function call(f, ...args) {
  return f(...args);
});
