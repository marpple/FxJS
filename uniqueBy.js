import curry from "./curry.js";
import isIterable from "./isIterable.js";
import go from "./go.js";
import identity from "./identity.js";
import last from "./last.js";
import pipe from "./pipe.js";
import filter from "./Lazy/filterLazy.js";
import entries from "./Lazy/entriesLazy.js";
import takeAll from "./takeAll.js";

export const uniqueBy = curry(function uniqueBy(f, iter) {
  const s = new Set();
  const isObj = !isIterable(iter);
  return go(
    iter,
    isObj ? entries : identity,
    filter(pipe(
      isObj ? last : identity,
      f,
      b => s.has(b) ? false : s.add(b))),
    isObj ? object : takeAll);
});

export default uniqueBy;