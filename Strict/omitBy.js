import curry from "./curry.js";
import go from "./go.js";
import object from "./object.js";
import entriesLazy from "../Lazy/entriesLazy.js";
import rejectLazy from "../Lazy/rejectLazy.js";

export default curry(function omitBy(f, obj) {
  return go(obj, entriesLazy, rejectLazy(f), object);
});