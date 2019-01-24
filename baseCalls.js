import object from "./object.js";
import isIterable from "./isIterable.js";
import entriesLazy from "./Lazy/entriesLazy.js";
import go1 from "./go1.js";

const baseCalls = (map, mapEntries) => function calls(fs, ...args) {
  return isIterable(fs) ?
    map(f => f(...args), fs) :
    go1(mapEntries(f => f(...args), entriesLazy(fs)), object);
};

export default baseCalls;