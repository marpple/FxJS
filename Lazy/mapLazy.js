import curry from '../curry.js';
import go1 from '../go1.js';

export default curry(function *mapLazy(f, iter) {
  for (const a of iter) yield go1(a, f);
});