import curry from './curry.js';
import go1 from './go.js';
import takeAll from './takeAll.js';
import differenceLazy from '../Lazy/differenceLazy.js';

export default curry(function difference(b, a) {
  return go1(
    differenceLazy(b, a),
    takeAll
  );
});