import curry from "../curry.js";

export default curry(function *appendLazy(a, iter) {
  yield* iter;
  yield a;
});