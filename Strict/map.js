import mapL from "../Lazy/mapL.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function map(f, iter) {
  return takeAll(mapL(f, iter));
});
