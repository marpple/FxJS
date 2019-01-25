import curry from "./curry.js";
import entriesLazy from "./Lazy/entriesLazy.js";
import mapEntriesLazy from "./Lazy/mapEntriesLazy.js";
import object from "./object.js";

export default curry(function mapObject(f, obj) {
  return object(mapEntriesLazy(f, entriesLazy(obj)));
});