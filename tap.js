import reduce from "./reduce.js";
import call from "./call.js";
import go1 from "./go1.js";

export default function tap(f, ...fs) {
  return (a, ...as) => go1(reduce(call, f(a, ...as), fs), _ => a);
}