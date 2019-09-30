import curry from "./curry.js";
import takeAll from "./takeAll.js";
import appendL from "../Lazy/appendLazy.js";

export default curry(function append(a, iter) {
  return takeAll(appendL(a, iter));
});