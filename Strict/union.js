import curry from "./curry.js";
import go1 from "./go1.js";
import takeAll from "./takeAll.js";
import unionL from "../Lazy/unionL.js";

export default curry(function union(a, b) {
  return go1(unionL(a, b), takeAll);
});
