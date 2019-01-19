import entriesMapLazy from "./Lazy/entriesMapLazy.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function entriesMap(f, iter) {
  return takeAll(entriesMapLazy(f, iter));
});