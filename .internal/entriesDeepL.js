import entriesL from "../Lazy/entriesL.js";
import mapEntriesL from "../Lazy/mapEntriesL.js";
import go from "../Strict/go.js";
import either from "../Strict/either.js";
import isObject from "../Strict/isObject.js";
import isFunction from "../Strict/isFunction.js";
import when from "../Strict/when.js";

export default function entriesDeepL(obj) {
  return go(
    obj,
    entriesL,
    mapEntriesL(when(either(isObject, isFunction), entriesDeepL))
  )
}