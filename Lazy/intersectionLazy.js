import curry from "../curry.js";
import identity from '../identity.js';
import intersectionByLazy from './intersectionByLazy.js';

export default curry(function intersectionLazy(a, b) {
  return intersectionByLazy(identity, a, b);
});