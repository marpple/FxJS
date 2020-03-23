import curry from "./curry.js";
import find from "./find.js";
import isMatch from "./isMatch.js";

const includes = (v, iter) => {
  if (typeof v === 'string' && typeof iter === 'string') return iter.includes(v);
  else return find(isMatch(v), iter) !== undefined;
};

export default curry(includes);