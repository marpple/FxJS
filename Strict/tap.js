import reduce from "./reduce.js";
import _go1 from "../_internal/go1Sync.js";
import go1 from "./go1.js";

export default function tap(f, ...fs) {
  return (a, ...as) => go1(reduce(_go1, f(a, ...as), fs), (_) => a);
}
