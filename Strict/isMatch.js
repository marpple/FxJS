import curry from "./curry.js";
import isArray from "./isArray.js";
import everyBy from "./everyBy.js";
import entriesLazy from "../Lazy/entriesLazy.js";

export default curry(function isMatch(a, b) {
  return (
    typeof a == 'function' ? !!a(b)
      :
    isArray(a) && isArray(b) ? everyBy(v => b.includes(v), a)
      :
    typeof b == 'object' ? everyBy(([k, v]) => b[k] == v, entriesLazy(a))
      :
    a instanceof RegExp ? b.match(a)
      :
    a == b
  );
});