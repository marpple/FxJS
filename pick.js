import filterLazy from "./Lazy/filterLazy.js";
import curry from "./curry.js";
import basePick from "./basePick.js";

export default curry(function pick(ks, obj) {
  return basePick(filterLazy, ks, obj);
});