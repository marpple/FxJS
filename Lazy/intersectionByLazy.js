import curry from "../curry.js";
import go from '../go.js';
import mapLazy from './mapLazy.js';
import filterLazy from './filterLazy.js';

export default curry(function *intersectionByLazy(f, a, b) {
  const setB = go(b, mapLazy(f), it => new Set(it));
  yield* new Set(filterLazy(item => setB.has(f(item)), a));
});