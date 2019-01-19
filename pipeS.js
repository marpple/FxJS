import reduceS from "./reduceS.js";
import call from "./call.js";

export default function pipeS(f, ...fs) {
  return (...as) => reduceS(call, f(...as), fs);
}