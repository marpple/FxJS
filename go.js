import reduce from "./reduce.js";
import call from "./call.js";

export default function go(..._) {
  return reduce(call, _);
}