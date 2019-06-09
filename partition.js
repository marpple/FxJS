import curry from './curry.js';
import groupBy from './groupBy.js';
import go1 from "./go1.js";

export default curry(function partition(f, a) {
  return go1(
    go1(a, groupBy(b => go1(f(b), Boolean))),
    group => [group['true'], group['false']]);
});