import dropUntilL from "../Lazy/dropUntilL.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function dropWhile(f, iter) {
  return takeAll(dropUntilL(f, iter));
});
