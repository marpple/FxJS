import curry from "./curry.js";
import takeAll from "./takeAll.js";
import chunkL from "../Lazy/chunkL.js";

export default curry(function chunk(n, iter) {
  return takeAll(chunkL(n, iter));
});
