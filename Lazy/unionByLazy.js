import flatLazy from './flatLazy.js';
import uniqueByLazy from './uniqueByLazy.js';
import curry from '../curry.js';
import go from '../go.js';

export default curry(function unionByLazy(f, a, b) {
  return go(
    [a, b],
    flatLazy,
    uniqueByLazy(f))
});