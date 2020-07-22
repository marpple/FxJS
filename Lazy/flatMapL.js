import curry from "../Strict/curry.js";
import flatL from "./flatL.js";
import mapL from "./mapL.js";

export default curry(function flatMapL(f, iter) {
  return flatL(mapL(f, iter));
});
