import curry from "../Strict/curry.js";
import rangeL from "./rangeL.js";
import mapL from "./mapL.js";

export default curry(function repeatL(value, count) {
  return mapL((_) => value, rangeL(count));
});
