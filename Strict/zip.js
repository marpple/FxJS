import curry from "./curry.js";
import zipL from "../Lazy/zipL.js";
import takeAll from "./takeAll.js";
import go from "./go.js";
import apply from "./apply.js";

export default curry(function zip(...iters) {
  return go(iters, takeAll, apply(zipL), takeAll);
});
