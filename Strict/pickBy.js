import curry from "./curry.js";
import go from "./go.js";
import object from "./object.js";
import entriesL from "../Lazy/entriesLazy.js";
import filterL from "../Lazy/filterLazy.js";

export default curry(function pickBy(f, obj) {
  return go(obj, entriesL, filterL(f), object);
});