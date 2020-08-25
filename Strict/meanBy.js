import curry from "./curry.js";
import go from "./go.js";
import sum from "./sum.js";
import sel from "./sel.js";
import divide from "./divide.js";
import mapL from "../Lazy/mapL.js";
import fork from "./fork.js";

export default curry(function meanBy(f, iter) {
  return go(
    iter,
    mapL(f),
    Array.from.bind(Array),
    fork(divide, sum, sel("length"))
  );
});
