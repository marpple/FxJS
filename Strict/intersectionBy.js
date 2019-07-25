import intersectionByLazy from '../Lazy/intersectionByLazy.js';
import curry2 from './curry2.js';
import go1 from './go.js';
import takeAll from './takeAll.js';

export default curry2(function intersectionBy(f, b, a) {
  return go1(intersectionByLazy(f, b, a), takeAll);
});