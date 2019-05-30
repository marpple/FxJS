import intersectionByLazy from './Lazy/intersectionByLazy.js';
import curry from './curry.js';
import go1 from './go.js';
import takeAll from './takeAll.js';

export default curry(function intersectionBy(f, a, b) {
  return go1(intersectionByLazy(f, a, b), takeAll);
});