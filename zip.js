import curry from './curry.js';
import zipLazy from './Lazy/zipLazy.js';
import takeAll from "./takeAll.js";
import go from "./go.js";
import apply from './apply.js';

export default curry(function zip(...iters) {
  return go(iters, takeAll, apply(zipLazy), takeAll);
});