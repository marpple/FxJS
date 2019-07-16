import curry from "./curry.js";
import takeAll from "./takeAll.js";
import splitEveryLazy from "../Lazy/splitEveryLazy.js";

export default curry(function splitEvery(n, str) {
  return takeAll(splitEveryLazy(n, str));
});