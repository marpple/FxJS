import reduceS from "./reduceS.js";
import call from "./call.js";

export default function goS(..._) {
  return reduceS(call, _);
}