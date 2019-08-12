import curry2 from "../Strict/curry2.js";

export default curry2(function* updateLazy(index, value, iter) {
  let i = 0;
  for (const item of iter) {
    yield i++ === index ? value : item;
  }
});