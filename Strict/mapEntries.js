import mapEntriesL from "../Lazy/mapEntriesL.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function mapEntries(f, iter) {
  return takeAll(mapEntriesL(f, iter));
});
