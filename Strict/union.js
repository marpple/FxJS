import curry from './curry.js';
import go1 from './go1.js';
import takeAll from './takeAll.js';
import unionLazy from '../Lazy/unionLazy.js';

export default curry(function union(a, b) {
  return go1(
    unionLazy(a, b),
    takeAll
  )
});