import curry from "../Strict/curry.js";

export default curry(function* prependL(a, iter) {
  yield a;
  yield* iter;
});
