import curry from "../Strict/curry.js";

export default curry(function* concatL(a, b) {
  yield* a;
  yield* b;
});
