import keysL from "../Lazy/keysL.js";
import isIterable from "./isIterable.js";

export default function isEmpty(a) {
  if (isIterable(a)) {
    return a[Symbol.iterator]().next().done;
  } else if (a !== null && typeof a === "object") {
    return isEmpty(keysL(a));
  } else {
    return false;
  }
}
