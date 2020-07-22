import head from "./head.js";
import filterL from "../Lazy/filterL.js";
import curry from "./curry.js";

export default curry(function find(f, iter) {
  return head(filterL(f, iter));
});
