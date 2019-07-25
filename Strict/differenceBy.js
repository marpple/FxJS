import curry2 from './curry2.js';
import takeAll from './takeAll.js';
import differenceByLazy from '../Lazy/differenceByLazy.js';
import go1 from './go.js';

export default curry2(function differenceBy2(f, b, a) {
  return go1(
    differenceByLazy(f, b, a),
    takeAll
  )
});