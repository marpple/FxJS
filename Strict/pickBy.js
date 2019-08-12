import curry from "./curry.js";
import go from "./go.js";
import object from "./object.js";
import entriesLazy from "../Lazy/entriesLazy.js";
import filterLazy from "../Lazy/filterLazy.js";

export default curry(function pickBy(f, obj) {
  return go(obj, entriesLazy, filterLazy(f), object);
});