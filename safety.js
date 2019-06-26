import emptyLazy from "./Lazy/emptyLazy.js";

export default function safety(a) {
  return a != null && !!a[Symbol.iterator] ? a[Symbol.iterator]() : emptyLazy();
}