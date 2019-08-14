import curry from "./curry.js";
import any from "./any.js";
import mapLazy from "../Lazy/mapLazy.js";

export default curry(function satisfiesSome(fns, ...args) {
  return any(mapLazy(f => f(...args), fns));
});