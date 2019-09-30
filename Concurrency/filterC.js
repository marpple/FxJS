import filterL from "../Lazy/filterLazy.js";
import takeAllC from "./takeAllC.js";
import curry from "../Strict/curry.js";

export default curry(function filterC(f, iter) {
  return takeAllC(filterL(f, iter));
});