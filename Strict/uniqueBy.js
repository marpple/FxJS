import uniqueByL from "../Lazy/uniqueByLazy.js";
import entriesL from '../Lazy/entriesLazy.js';
import curry from './curry.js';
import isIterable from './isIterable.js';
import object from './object.js';
import takeAll from "./takeAll.js";
import last from './last.js';

export default curry(function uniqueBy(f, iter) {
  return isIterable(iter) ?
    takeAll(uniqueByL(f, iter)) :
    object(uniqueByL(e => f(last(e)), entriesL(iter)));
});