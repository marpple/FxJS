import curry from '../curry.js';
import go1 from '../go1.js';
import toIter from "../toIter.js";

export default curry(function* mapLazy(f, iter) {
  for (const a of toIter(iter)) yield go1(a, f);
});