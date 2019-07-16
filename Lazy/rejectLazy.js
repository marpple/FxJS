import filterLazy from "./filterLazy.js";
import curry from "../Strict/curry.js";
import go1 from "../Strict/go1.js";
import not from "../Strict/not.js";

export default curry(function rejectLazy(f, iter) {
  return filterLazy(a => go1(f(a), not), iter);
});