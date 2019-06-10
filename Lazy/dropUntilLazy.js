import curry from "../curry.js";
import go1 from "../go1.js";
import safety from "../safety.js";
import filterLazy from "./filterLazy.js";

export default curry(function dropUntilLazy(f, iter) {
  let skip = false;
  return filterLazy(
    a => go1(f(a), b => skip || (skip = b, false)),
    safety(iter));
});