import curry2 from "../Strict/curry2.js";
import prependL from "./prependL.js";

export default curry2(function* insertL(index, item, iter) {
  if (index < 0) return yield* prependL(item, iter);
  let i = 0;
  for (const el of iter) {
    if (i++ === index) yield item;
    yield el;
  }
  if (i <= index) yield item;
});
