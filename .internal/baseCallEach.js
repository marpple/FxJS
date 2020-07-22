import isIterable from "../Strict/isIterable.js";
import entriesL from "../Lazy/entriesL.js";
import mapEntriesL from "../Lazy/mapEntriesL.js";

const baseCallEach = (map, object) => (fs, ...args) =>
  isIterable(fs)
    ? map((f) => f(...args), fs)
    : object(mapEntriesL((f) => f(...args), entriesL(fs)));

export default baseCallEach;
