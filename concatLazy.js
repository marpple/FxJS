import curry from "../curry.js";

export default curry(function *concatLazy(a, b) {
  yield* b;
  yield* a;
});