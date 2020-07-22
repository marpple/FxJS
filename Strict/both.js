import curry2 from "./curry2.js";
import go from "./go.js";
import when from "./when.js";

export default curry2(function both(f1, f2, ...args) {
  return go(
    f1(...args),
    when(Boolean, () => f2(...args)),
    Boolean
  );
});
