import emptyL from "../Lazy/emptyL.js";

export default function toIter(iterable) {
  return iterable && iterable[Symbol.iterator]
    ? iterable[Symbol.iterator]()
    : emptyL();
}
