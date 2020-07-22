import curry from "./curry.js";
import go from "./go.js";
import juxt from "./juxt.js";
import sum from "./sum.js";
import sel from "./sel.js";
import apply from "./apply.js";
import divide from "./divide.js";
import mapL from "../Lazy/mapL.js";

export default curry(function meanBy(f, iter) {
  return go(
    iter,
    mapL(f),
    Array.from.bind(Array),
    juxt(sum, sel("length")),
    apply(divide)
  );
});
