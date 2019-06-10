import curry from "../curry.js";
import safety from "../safety.js";
import filterLazy from "./filterLazy.js";

export default curry(function dropLazy(l, iter) {
  let i = 0;
  return filterLazy(_ => (++i) > l, safety(iter));
});