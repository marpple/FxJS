import isIterable from "../Strict/isIterable.js";
import entriesLazy from "../Lazy/entriesLazy.js";
import mapEntriesLazy from "../Lazy/mapEntriesLazy.js";

const baseCalls = (map, object) => function calls(fs, ...args) {
  return isIterable(fs) ?
    map(f => f(...args), fs) :
    object(mapEntriesLazy(f => f(...args), entriesLazy(fs)));
};

export default baseCalls;