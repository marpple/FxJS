import curry from "./curry.js";
import flat from "./flat.js";
import mapLazy from "../Lazy/mapLazy.js";

export default curry(function flatMap(f, iter) {
  return flat(mapLazy(f, iter));
});