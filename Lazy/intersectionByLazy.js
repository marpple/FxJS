import curry from "../curry.js";
import mapLazy from './mapLazy.js';
import filterLazy from './filterLazy.js';

export default curry(function *intersectionByLazy(f, a, b) {
  const setB = new Set(mapLazy(f, b));
  yield* new Set(filterLazy(item => setB.has(f(item)), a));
});