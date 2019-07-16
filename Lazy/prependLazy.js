import curry from "../Strict/curry.js";

export default curry(function *prependLazy(a, iter) {
  yield a;
  yield* iter;
});