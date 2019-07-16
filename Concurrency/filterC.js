import filterLazy from "../Lazy/filterLazy.js";
import takeAllC from "./takeAllC.js";
import curry from "../Strict/curry.js";

export default curry(function filterC(f, iter) {
  return takeAllC(filterLazy(f, iter));
});