import isIterable from "../Strict/isIterable.js";
import entriesL from "../Lazy/entriesLazy.js";
import mapEntriesL from "../Lazy/mapEntriesLazy.js";

const baseCalls = (map, object) => function calls(fs, ...args) {
  return isIterable(fs) ?
    map(f => f(...args), fs) :
    object(mapEntriesL(f => f(...args), entriesL(fs)));
};

export default baseCalls;