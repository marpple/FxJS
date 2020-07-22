import rejectL from "../Lazy/rejectL.js";
import curry from "./curry.js";
import object from "./object.js";
import entriesL from "../Lazy/entriesL.js";

export default curry(function omit(ks, obj) {
  return object(rejectL(([k]) => ks.includes(k), entriesL(obj)));
});
