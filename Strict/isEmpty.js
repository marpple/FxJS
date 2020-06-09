import prependL from "../Lazy/prependL.js";
import keysL from "../Lazy/keysL.js";
import isIterable from "./isIterable.js";

export default function isEmpty(a) {
  if (Array.isArray(a) || typeof a === 'string') {
    return a.length === 0;
  } else if (isIterable(a)) {
    const it = a[Symbol.iterator]();
    const { done, value } = it.next();
    if (done) return true;
    else return [done, prependL(value, it)];
  } else if (a !== null && typeof a === 'object') {
    const res = isEmpty(keysL(a));
    return typeof res === 'boolean' ? res : res[0];
  } else {
    return false;
  }
}