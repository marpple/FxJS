import emptyLazy from "./Lazy/emptyLazy.js";

export default function toIter(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : emptyLazy();
}