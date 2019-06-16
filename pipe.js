import reduce from "./reduce.js";
import go1Sync from "./.internal/go1Sync.js";

export default function pipe(f, ...fs) {
  return (...as) => reduce(go1Sync, f(...as), fs);
}