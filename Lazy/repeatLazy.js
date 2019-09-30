import curry from "../Strict/curry.js";
import rangeL from "./rangeLazy.js";
import mapL from "./mapLazy.js";

export default curry(function repeatL(value, count) {
  return mapL(_ => value, rangeL(count));
});