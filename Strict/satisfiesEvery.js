import curry from "./curry.js";
import every from "./every.js";
import mapLazy from "../Lazy/mapLazy.js";

export default curry(function satisfiesEvery(fns, ...args) {
  return every(mapLazy(f => f(...args), fns));
});