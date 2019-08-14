import curry2 from "../Strict/curry2.js";
import uniqueWithLazy from "./uniqueWithLazy.js";
import concatLazy from "./concatLazy.js";

export default curry2(function unionWithLazy(f, iter1, iter2) {
  return uniqueWithLazy(f, concatLazy(iter1, iter2));
});