import flatLazy from './flatLazy.js';
import uniqueByLazy from './uniqueByLazy.js';
import curry from '../Strict/curry.js';
import go from '../Strict/go.js';

export default curry(function unionByLazy(f, a, b) {
  return go(
    [a, b],
    flatLazy,
    uniqueByLazy(f))
});