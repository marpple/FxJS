import curry from "./curry.js";

export default curry(function split(sep, str) {
  return (str || "").split(sep);
});
