import intersectionByLazy from '../Lazy/intersectionByLazy.js';
import curry from './curry.js';
import go1 from './go.js';
import takeAll from './takeAll.js';

export default curry(function intersectionBy(f, b, a) {
  return go1(intersectionByLazy(f, b, a), takeAll);
});