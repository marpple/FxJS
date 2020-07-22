import unionByL from "../Lazy/unionByL.js";
import curry2 from "./curry2.js";
import go1 from "./go1.js";
import takeAll from "./takeAll.js";

export default curry2(function unionBy(f, a, b) {
  return go1(unionByL(f, a, b), takeAll);
});
