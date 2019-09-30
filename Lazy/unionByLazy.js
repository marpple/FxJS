import flatL from './flatLazy.js';
import uniqueByL from './uniqueByLazy.js';
import curry2 from '../Strict/curry2.js';
import go from '../Strict/go.js';

export default curry2(function unionByL(f, a, b) {
  return go(
    [a, b],
    flatL,
    uniqueByL(f))
});