import curry from "./curry.js";
import find from "./find.js";
import isMatch from "./isMatch.js";
import go1 from "./go1.js";

const includes = (v, iter) => {
  if (typeof v === "string" && typeof iter === "string") {
    return iter.includes(v);
  } else {
    return go1(find(isMatch(v), iter), (a) => a !== undefined);
  }
};

export default curry(includes);
