import takeAll from "../Strict/takeAll.js";
import takeCL from "../Lazy/takeCL.js";
import takeC from "./takeC.js";

export default function takeAllC(n, iter) {
  return arguments.length > 1 ?
    takeAll(takeCL(n, iter)) :
    typeof n == 'number' ? _ => takeAllC(n, _) : takeC(Infinity, n);
}

