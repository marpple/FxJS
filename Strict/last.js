import isString from "./isString.js";
import reduce from "./reduce.js";
import isArray from "./isArray.js";

export default function last(iter) {
  if (isArray(iter) || isString(iter)) {
    return iter[iter.length - 1];
  }
  return reduce((_, a) => a, iter);
}
