import uniqueByLazy from "./Lazy/uniqueByLazy.js";
import curry from './curry.js';
import isIterable from './isIterable.js';
import object from './object.js';
import takeAll from "./takeAll.js";
import go1 from './go1.js';

export default curry(function uniqueBy(f, iter) {
  return go1(
    uniqueByLazy(f, iter),
    isIterable(iter) ? takeAll : object,
  );
});