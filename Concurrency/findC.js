import curry from "../Strict/curry.js";
import filterL from "../Lazy/filterLazy.js";
import headC from "./headC.js";

export default curry(function findC(f, iter) {
  return headC(filterL(f, iter));
});