import curry from "../Strict/curry.js";
import rangeLazy from "./rangeLazy.js";
import mapLazy from "./mapLazy.js";

export default curry(function timesLazy(f, n) {
  return mapLazy(f, rangeLazy(n));
});