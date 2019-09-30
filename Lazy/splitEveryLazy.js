import curry from "../Strict/curry.js";
import emptyL from "./emptyLazy.js";
import mapL from "./mapLazy.js";
import rangeL from "./rangeLazy.js";


export default curry(function splitEveryL(n, str) {
  if (!str) return emptyL();
  return mapL(i => str.substr(i * n, n), rangeL(Math.ceil(str.length / n)));
});