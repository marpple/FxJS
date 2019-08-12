import curry from "./curry.js";
import takeAll from "./takeAll.js";
import repeatLazy from "../Lazy/repeatLazy.js";

export default curry(function repeat(value, count) {
  return takeAll(repeatLazy(value, count));
});