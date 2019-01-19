import isIterable from "./isIterable.js";

const baseCalls = (map, entriesMap) => function calls(fs, ...args) {
  return isIterable(fs) ?
    map(f => f(...args), fs) :
    object(entriesMap(f => f(...args), fs));
};

export default baseCalls;