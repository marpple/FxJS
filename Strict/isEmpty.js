import entriesL from "../Lazy/entriesL.js";
import head from "./head.js";
import isIterable from "./isIterable.js";

export default function isEmpty (a) {
  if (isIterable(a)) return head(a) === undefined;
  else if (a !== null && typeof a === 'object') return isEmpty(entriesL(a));
  else return false;
}