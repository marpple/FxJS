import curry from '../curry.js';
import identity from '../identity.js';
import unionByLazy from './unionByLazy.js';

export default curry(function unionLazy(a, b) {
  return unionByLazy(identity, a, b);
});