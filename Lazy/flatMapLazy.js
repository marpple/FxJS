import curry from "../Strict/curry.js";
import flatLazy from "./flatLazy.js";
import mapLazy from "./mapLazy.js";

export default curry(function flatMapLazy(f, iter) {
  return flatLazy(mapLazy(f, iter));
});