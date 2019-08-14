import curry from "./curry.js";
import all from "./all.js";
import mapLazy from "../Lazy/mapLazy.js";

export default curry(function satisfiesEvery(fns, ...args) {
  return all(mapLazy(f => f(...args), fns));
});