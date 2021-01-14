import go1 from "../Strict/go1.js";
import toIter from "../Strict/toIter.js";

export default function* zipWithIndexL(iter) {
  let i = -1;
  for (const a of toIter(iter)) {
    const _i = ++i;
    yield go1(a, (a) => [_i, a]);
  }
}
