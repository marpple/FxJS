import curry from '../curry.js';
import flatLazy from './flatLazy.js';

export default curry(function* unionByLazy(f, a, b) {
  const set = new Set();
  for (const item of flatLazy([a, b])) {
    const itemByF = f(item);
    if (!set.has(itemByF)) {
      set.add(itemByF);
      yield item;
    }
  }
});