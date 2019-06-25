import curry from "./curry.js";
import takeAll from "./takeAll.js";
import chunkLazy from "./Lazy/chunkLazy.js";

export default curry(function chunk(n, iter) {
  return takeAll(chunkLazy(n, iter));
});