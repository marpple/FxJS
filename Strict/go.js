import reduce from "./reduce.js";
import go1Sync from "../.internal/go1Sync.js";

export default function go(..._) {
  return reduce(go1Sync, _);
}