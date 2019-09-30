import uniqueByL from './uniqueByLazy.js';
import identity from '../Strict/identity.js';

export default function uniqueL(obj) {
  return uniqueByL(identity, obj);
};