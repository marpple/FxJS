import curry from "./curry.js";
import go from "./go.js";
import takeAll from "./takeAll.js";
import intersectionL from "../Lazy/intersectionL.js";

export default curry(function intersection(a, b) {
  return go(b, intersectionL(a), takeAll);
});
