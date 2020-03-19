import go from "../Strict/go.js";
import isIterable from "../Strict/isIterable.js";
import reduce from "../Strict/reduce.js";
import when from "../Strict/when.js";

export default function objectDeep(entries) {
  return reduce(
    (acc, [k, v]) => go(v, when(isIterable, objectDeep), res => (acc[k] = res, acc)),
    {},
    entries
  );
}