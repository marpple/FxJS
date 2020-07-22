import curry from "./curry.js";

export default curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
});
