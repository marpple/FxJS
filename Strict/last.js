import reduce from "./reduce.js";
import isArray from "./isArray.js";

export default function last(iter) {
  if (isArray(iter)) {
    return iter[iter.length - 1];
  }
  return reduce((_, a) => a, iter);
}
