import curry from '../Strict/curry.js';
import identity from '../Strict/identity.js';
import unionByLazy from './unionByLazy.js';

export default curry(function unionLazy(a, b) {
  return unionByLazy(identity, a, b);
});