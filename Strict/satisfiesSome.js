import curry from "./curry.js";
import some from "./some.js";
import mapLazy from "../Lazy/mapLazy.js";

export default curry(function satisfiesSome(fns, ...args) {
  return some(mapLazy(f => f(...args), fns));
});