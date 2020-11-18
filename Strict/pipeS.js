import reduceS from "./reduceS.js";
import go1Sync from "../_internal/go1Sync.js";

export default function pipeS(f, ...fs) {
  return (...as) => reduceS(go1Sync, f(...as), fs);
}
