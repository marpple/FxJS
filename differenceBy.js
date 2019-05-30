import curry from './curry.js';
import takeAll from './takeAll.js';
import differenceByLazy from './Lazy/differenceByLazy.js';
import go from './go.js';

export default curry(function differenceBy(f, a, b) {
  return go(
    [a, b],
    args => differenceByLazy(f, ...args),
    takeAll
  )
});