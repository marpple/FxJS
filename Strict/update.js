import curry2 from "./curry2.js";
import takeAll from "./takeAll.js";
import updateL from "../Lazy/updateL.js";

export default curry2(function update(index, value, iter) {
  if (index < 0) {
    const arr = Array.from(iter);
    return update(arr.length + index, value, arr);
  } else {
    return takeAll(updateL(index, value, iter));
  }
});
