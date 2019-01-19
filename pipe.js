import reduce from "./reduce.js";
import call from "./call.js";

export default function pipe(f, ...fs) {
  return (...as) => reduce(call, f(...as), fs);
}