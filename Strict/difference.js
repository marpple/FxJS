import curry from "./curry.js";
import go1 from "./go.js";
import takeAll from "./takeAll.js";
import differenceL from "../Lazy/differenceL.js";

export default curry(function difference(b, a) {
  return go1(differenceL(b, a), takeAll);
});
