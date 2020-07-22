import curry2 from "./curry2.js";
import takeAll from "./takeAll.js";
import differenceByL from "../Lazy/differenceByL.js";
import go1 from "./go.js";

export default curry2(function differenceBy2(f, b, a) {
  return go1(differenceByL(f, b, a), takeAll);
});
