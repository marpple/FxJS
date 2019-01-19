import rejectLazy from "./Lazy/rejectLazy.js";
import curry from "./curry.js";
import basePick from "./basePick.js";

export default curry(function omit(ks, obj) {
  return basePick(rejectLazy, ks, obj);
});