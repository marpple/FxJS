import mapL from "../Lazy/mapL.js";
import string from "./string.js";
import curry from "./curry.js";

export default curry(function strMap(f, iter) {
  return string(mapL(f, iter));
});
