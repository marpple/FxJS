import reduce from "./reduce.js";
import go1Sync from "./.internal/go1Sync.js";
import go1 from "./go1.js";

export default function tap(f, ...fs) {
  return (a, ...as) => go1(reduce(go1Sync, f(a, ...as), fs), _ => a);
}