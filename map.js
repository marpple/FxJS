import mapLazy from "./Lazy/mapLazy.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function map(f, iter) {
  return takeAll(mapLazy(f, iter));
});