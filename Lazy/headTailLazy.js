import toIter from "../toIter.js";
import go1 from "../go1.js";
import take from "../take.js";

export default function headTailLazy(iter) {
  return go1(take(1, iter = toIter(iter)), ([head]) => [head, iter]);
}