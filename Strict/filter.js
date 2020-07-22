import filterL from "../Lazy/filterL.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function filter(f, iter) {
  return takeAll(filterL(f, iter));
});
