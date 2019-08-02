import takeAll from "../Strict/takeAll.js";
import takeAllLazyC from "../Lazy/takeAllLazyC.js";
import takeC from "./takeC.js";

export default function takeAllC(n, iter) {
  return arguments.length > 1 ?
    takeAll(takeAllLazyC(n, iter)) :
    typeof n == 'number' ? _ => takeAllC(n, _) : takeC(Infinity, n);
}

