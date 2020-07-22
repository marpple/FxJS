import curry from "./curry.js";

export default curry(function curryN(n, f) {
  return function _recur(a, ..._) {
    return _.length >= n ? f(a, ..._) : (...__) => _recur(a, ..._, ...__);
  };
});
