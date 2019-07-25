import flatLazy from './flatLazy.js';
import uniqueByLazy from './uniqueByLazy.js';
import curry2 from '../Strict/curry2.js';
import go from '../Strict/go.js';

export default curry2(function unionByLazy(f, a, b) {
  return go(
    [a, b],
    flatLazy,
    uniqueByLazy(f))
});