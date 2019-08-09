import curry from "../Strict/curry.js";
import rangeLazy from "./rangeLazy.js";
import mapLazy from "./mapLazy.js";

export default curry(function repeatLazy(value, count) {
  return mapLazy(_ => value, rangeLazy(count));
});