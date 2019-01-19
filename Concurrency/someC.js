import take1C from "./take1C.js";
import curry from "../curry.js";
import filterLazy from "../Lazy/filterLazy.js";
import go1 from "../go1.js";

export default curry(function someC(f, iter) {
  return go1(take1C(filterLazy(f, iter)), ({length}) => length == 1);
});