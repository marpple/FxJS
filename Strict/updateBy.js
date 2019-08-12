import curry2 from "./curry2.js";
import takeAll from "./takeAll.js";
import updateByLazy from "../Lazy/updateByLazy.js";

export default curry2(function updateBy(index, f, iter) {
  if (index < 0) {
    const arr = Array.from(iter);
    return updateBy(arr.length + index, f, arr);
  } else {
    return takeAll(updateByLazy(index, f, iter));
  }
});