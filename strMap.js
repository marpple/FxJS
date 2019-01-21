import mapLazy from "./Lazy/mapLazy.js";
import string from "./string.js";
import curry from "./curry.js";

export default curry(function strMap(f, iter) {
  return string(mapLazy(f, iter));
});