import go from "../Strict/go.js";
import isArray from "../Strict/isArray.js";
import isIterable from "../Strict/isIterable.js";
import isString from "../Strict/isString.js";
import not from "../Strict/not.js";
import reduce from "../Strict/reduce.js";
import when from "../Strict/when.js";
import clonedIterable from "./clonedIterableSymbol.js";

const isEntries = (a) =>
  not(isString(a)) &&
  not(isArray(a)) &&
  isIterable(a) &&
  not(a[clonedIterable]) === true;

export default function objectDeep(entries) {
  return reduce(
    (acc, [k, v]) =>
      go(v, when(isEntries, objectDeep), (res) => ((acc[k] = res), acc)),
    {},
    entries
  );
}
