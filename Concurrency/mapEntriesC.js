import mapEntriesLazy from "../Lazy/mapEntriesLazy.js";
import takeAllC from "./takeAllC.js";
import curry from "../curry.js";

export default curry(async function mapEntriesC(f, iter) {
  return takeAllC(mapEntriesLazy(f, iter));
});