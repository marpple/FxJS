import curry from './curry.js';
import go from './go.js';
import takeAll from './takeAll.js';
import intersectionLazy from './Lazy/intersectionLazy.js';

export default curry(function intersection(a, b) {
  return go(
    b,
    intersectionLazy(a),
    takeAll
  )
});