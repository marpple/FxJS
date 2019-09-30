import curry from "../Strict/curry.js";
import rangeL from "./rangeLazy.js";
import mapL from "./mapLazy.js";

export default curry(function timesL(f, n) {
  return mapL(f, rangeL(n));
});