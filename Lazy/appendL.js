import curry from "../Strict/curry.js";

export default curry(function* appendL(a, iter) {
  yield* iter;
  yield a;
});
