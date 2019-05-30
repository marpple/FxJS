import curry from './curry.js';
import go from './go.js';
import takeAll from './takeAll.js';
import differenceLazy from './Lazy/differenceLazy.js';

export default curry(function difference(a, b) {
  return go(b,
    differenceLazy(a),
    takeAll
  );
});