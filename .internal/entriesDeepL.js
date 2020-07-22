import entriesL from "../Lazy/entriesL.js";
import mapEntriesL from "../Lazy/mapEntriesL.js";
import cond from "../Strict/cond.js";
import either from "../Strict/either.js";
import go from "../Strict/go.js";
import identity from "../Strict/identity.js";
import isArray from "../Strict/isArray.js";
import isFunction from "../Strict/isFunction.js";
import isIterable from "../Strict/isIterable.js";
import isObject from "../Strict/isObject.js";
import isString from "../Strict/isString.js";
import clonedIterableSymbol from "./clonedIterableSymbol.js";

const delegateIterable = function* (iter) {
  yield* iter;
};

const cloneIterable = (iter) => {
  const cloned = delegateIterable(iter);
  cloned[clonedIterableSymbol] = true;
  return cloned;
};

export default function entriesDeepL(obj) {
  return go(
    obj,
    entriesL,
    mapEntriesL(
      cond(
        [isArray, (arr) => arr.slice()],
        [isString, identity],
        [isIterable, cloneIterable],
        [either(isObject, isFunction), entriesDeepL],
        [() => true, identity]
      )
    )
  );
}
