import curry from "../Strict/curry.js";

export default curry(function *concatLazy(a, b) {
  yield* b;
  yield* a;
});