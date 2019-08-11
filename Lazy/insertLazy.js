import curry2 from "../Strict/curry2.js";
import prependLazy from "./prependLazy.js";

export default curry2(function* insertLazy(index, item, iter) {
  if (index < 0) return yield* prependLazy(item, iter);
  let i = 0;
  for (const el of iter) {
    if (i++ === index) yield item;
    yield el;
  }
  if (i <= index) yield item;
});