import curry from "./curry.js";
import takeAll from "./takeAll.js";
import uniqueWithL from "../Lazy/uniqueWithL.js";

export default curry(function uniqueWith(f, iter) {
  return takeAll(uniqueWithL(f, iter));
});
