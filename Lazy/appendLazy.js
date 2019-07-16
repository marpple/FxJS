import curry from "../Strict/curry.js";

export default curry(function *appendLazy(a, iter) {
  yield* iter;
  yield a;
});