import curry from "./curry.js";
import isArray from "./isArray.js";
import every from "./every.js";
import entriesL from "../Lazy/entriesL.js";

export default curry(function isMatch(a, b) {
  return typeof a == "function"
    ? !!a(b)
    : isArray(a) && isArray(b)
    ? every((v) => b.includes(v), a)
    : b && typeof b == "object"
    ? every(([k, v]) => b[k] == v, entriesL(a))
    : a instanceof RegExp
    ? b.match(a)
    : a == b;
});
