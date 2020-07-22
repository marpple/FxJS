import curry2 from "../Strict/curry2.js";
import uniqueWithL from "./uniqueWithL.js";
import concatL from "./concatL.js";

export default curry2(function unionWithL(f, iter1, iter2) {
  return uniqueWithL(f, concatL(iter1, iter2));
});
