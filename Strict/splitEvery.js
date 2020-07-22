import curry from "./curry.js";
import takeAll from "./takeAll.js";
import splitEveryL from "../Lazy/splitEveryL.js";

export default curry(function splitEvery(n, str) {
  return takeAll(splitEveryL(n, str));
});
