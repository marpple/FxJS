import curry from "../Strict/curry.js";
import identity from '../Strict/identity.js';
import intersectionByLazy from './intersectionByLazy.js';

export default curry(function intersectionLazy(a, b) {
  return intersectionByLazy(identity, a, b);
});