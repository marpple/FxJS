import curry from "../Strict/curry.js";
import flatL from "./flatLazy.js";
import mapL from "./mapLazy.js";

export default curry(function flatMapL(f, iter) {
  return flatL(mapL(f, iter));
});