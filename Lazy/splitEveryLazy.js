import curry from "../curry.js";
import emptyLazy from "./emptyLazy.js";
import mapLazy from "./mapLazy.js";
import rangeLazy from "./rangeLazy.js";


export default curry(function splitEveryLazy(n, str) {
  if (!str) return emptyLazy();
  return mapLazy(i => str.substr(i * n, n), rangeLazy(Math.ceil(str.length / n)));
});