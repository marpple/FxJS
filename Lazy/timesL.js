import curry from "../Strict/curry.js";
import rangeL from "./rangeL.js";
import mapL from "./mapL.js";

export default curry(function timesL(f, n) {
  return mapL(f, rangeL(n));
});
