import go1 from "../Strict/go1.js";
import curry2 from "../Strict/curry2.js";

export default curry2(function* updateByL(index, f, iter) {
  let i = 0;
  for (const item of iter) {
    yield i++ === index ? go1(item, f) : item;
  }
});
