import curry from "../curry.js";
import isIterable from "../isIterable.js";
import go from "../go.js";
import identity from "../identity.js";
import last from "../last.js";
import pipe from "../pipe.js";
import filterLazy from "./filterLazy.js";
import entries from "./entrieslazy.js";

export const uniqueByLazy = curry(function uniqueByLazy(f, iter) {
  const s = new Set();
  const isObj = !isIterable(iter);
  return go(
    iter,
    isObj ? entries : identity,
    filterLazy(pipe(
      isObj ? last : identity,
      f,
      b => s.has(b) ? false : s.add(b))));
});

export default uniqueByLazy;