import curry from "../curry.js";
import mapLazy from "./mapLazy.js";
import rangeLazy from "./rangeLazy.js";

export default curry(function splitEveryLazy(n, str) {
  return mapLazy(i => str.substr(i * n, n), rangeLazy(Math.ceil(str.length / n)));
})