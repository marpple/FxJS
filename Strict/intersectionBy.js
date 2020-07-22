import intersectionByL from "../Lazy/intersectionByL.js";
import curry2 from "./curry2.js";
import takeAll from "./takeAll.js";

export default curry2(function intersectionBy(f, b, a) {
  return takeAll(intersectionByL(f, b, a));
});
