import curry from "./curry.js";
import object from "./object.js";
import rejectLazy from "./Lazy/rejectLazy.js";
import mapLazy from "./Lazy/mapLazy.js";

export default curry(function pick(ks, obj) {
  return object(
    rejectLazy(([_, v]) => v === undefined,
      mapLazy(k => [k, obj[k]], ks)));
});