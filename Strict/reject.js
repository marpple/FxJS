import filter from "./filter.js";
import curry from "./curry.js";
import go1 from "./go1.js";
import not from "./not.js";

export default curry(function reject(f, iter) {
  return filter((a) => go1(f(a), not), iter);
});
