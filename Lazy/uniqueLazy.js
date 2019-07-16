import uniqueByLazy from './uniqueByLazy.js';
import identity from '../Strict/identity.js';

export default function uniqueLazy(obj) {
  return uniqueByLazy(identity, obj);
};