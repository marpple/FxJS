import head from "./head.js";
import reduce from "./reduce.js";
import reverseL from "../Lazy/reverseL.js";

export default function reduceRight(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2)
    return reduce(f, head((iter = reverseL(acc))), iter);
  return reduce(f, acc, reverseL(iter));
}
