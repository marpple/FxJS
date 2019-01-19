import filterLazy from "./filterLazy.js";
import curry from "../curry.js";
import go1 from "../go1.js";
import not from "../not.js";

export default curry(function rejectLazy(f, iter) {
  return filterLazy(a => go1(f(a), not), iter);
});