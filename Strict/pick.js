import curry from "./curry.js";
import object from "./object.js";
import rejectL from "../Lazy/rejectLazy.js";
import mapL from "../Lazy/mapLazy.js";

export default curry(function pick(ks, obj) {
  return object(
    rejectL(([_, v]) => v === undefined,
      mapL(k => [k, obj[k]], ks)));
});