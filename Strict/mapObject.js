import curry from "./curry.js";
import entriesL from "../Lazy/entriesL.js";
import mapEntriesL from "../Lazy/mapEntriesL.js";
import object from "./object.js";

export default curry(function mapObject(f, obj) {
  return object(mapEntriesL(f, entriesL(obj)));
});
