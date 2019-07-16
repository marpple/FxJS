import uniqueByLazy from "../Lazy/uniqueByLazy.js";
import entriesLazy from '../Lazy/entriesLazy.js';
import curry from './curry.js';
import isIterable from './isIterable.js';
import object from './object.js';
import takeAll from "./takeAll.js";
import last from './last.js';

export default curry(function uniqueBy(f, iter) {
  return isIterable(iter) ?
    takeAll(uniqueByLazy(f, iter)) :
    object(uniqueByLazy(e => f(last(e)), entriesLazy(iter)));
});