import toIter from "./toIter.js";
import go1 from "./go1.js";
import takeAll from "./takeAll.js";

export function tail(iter) {
  return go1(head(iter = toIter(iter)), _ => takeAll(iter));
}

export default tail;