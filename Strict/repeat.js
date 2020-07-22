import curry from "./curry.js";
import takeAll from "./takeAll.js";
import repeatL from "../Lazy/repeatL.js";

export default curry(function repeat(value, count) {
  return takeAll(repeatL(value, count));
});
