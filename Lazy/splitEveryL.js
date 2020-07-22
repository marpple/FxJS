import curry from "../Strict/curry.js";
import emptyL from "./emptyL.js";
import mapL from "./mapL.js";
import rangeL from "./rangeL.js";

export default curry(function splitEveryL(n, str) {
  if (!str) return emptyL();
  return mapL((i) => str.substr(i * n, n), rangeL(Math.ceil(str.length / n)));
});
