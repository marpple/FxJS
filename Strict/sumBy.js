import add from "./add.js";
import reduce from "./reduce.js";
import curry from "./curry.js";
import mapL from "../Lazy/mapL.js";

export default curry(function sumBy(f, iter) {
  return reduce(add, mapL(f, iter));
});
