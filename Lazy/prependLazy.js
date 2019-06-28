import curry from "../curry.js";

export default curry(function *prependLazy(a, iter) {
  yield a;
  yield* iter;
});