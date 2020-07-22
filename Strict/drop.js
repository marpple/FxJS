import curry from "./curry.js";
import takeAll from "./takeAll.js";
import dropL from "../Lazy/dropL.js";

export default curry(function drop(l, iter) {
  return takeAll(dropL(l, iter));
});
