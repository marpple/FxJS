import curry from './curry.js';
import zipLazy from './Lazy/zipLazy.js';
import takeAll from "./takeAll.js";

export default curry(function zip(...iters) {
  return takeAll(zipLazy(...iters));
});