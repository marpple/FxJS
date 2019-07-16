import rejectLazy from "../Lazy/rejectLazy.js";
import curry from "./curry.js";
import object from "./object.js";
import entriesLazy from "../Lazy/entriesLazy.js";

export default curry(function omit(ks, obj) {
  return object(
    rejectLazy(([k]) => ks.includes(k),
      entriesLazy(obj)));
});