import curry from "../Strict/curry.js";

export default curry(function* sliceL(start, end, iter) {
  let i = 0;
  for (const item of iter) {
    if (i >= start && i < end) yield item;
    i += 1;
  }
});
