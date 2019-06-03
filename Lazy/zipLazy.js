import map from "../map.js";
import toIter from '../toIter.js';
import curry from '../curry.js';
import every from "../every.js";

export default curry(function *zipLazy(...iterables) {
  const iterators = map(toIter, iterables);
  while (true) {
    const group = map(a => a.next(), iterators);
    if (every(a => a.done, group)) break;
    yield map(a => a.value, group);
  }
});