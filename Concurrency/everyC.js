import take1C from "./take1C.js";
import curry from "../curry.js";
import rejectLazy from "../Lazy/rejectLazy.js";
import go1 from "../go1.js";

export default curry(function everyC(f, iter) {
  return go1(take1C(rejectLazy(f, iter)), ({length}) => length == 0);
});;