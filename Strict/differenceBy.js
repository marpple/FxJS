import curry from './curry.js';
import takeAll from './takeAll.js';
import differenceByLazy from '../Lazy/differenceByLazy.js';
import go1 from './go.js';

export default curry(function differenceBy(f, b, a) {
  return go1(
    differenceByLazy(f, b, a),
    takeAll
  )
});