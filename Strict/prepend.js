import curry from "./curry.js";
import takeAll from "./takeAll.js";
import prependL from "../Lazy/prependL.js";

export default curry(function prepend(a, iter) {
  return takeAll(prependL(a, iter));
});
