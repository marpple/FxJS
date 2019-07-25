import unionByLazy from '../Lazy/unionByLazy.js';
import curry2 from './curry2.js';
import go1 from './go1.js';
import takeAll from './takeAll.js';

export default curry2(function unionBy(f, a, b) {
  return go1(unionByLazy(f, a, b), takeAll);
});
