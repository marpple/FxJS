import takeAll from "../Strict/takeAll.js";
import limitLoadL from "../Lazy/limitLoadL.js";
import takeC from "./takeC.js";

export default function takeAllC(n, iter) {
  return arguments.length > 1
    ? takeAll(limitLoadL(n, iter))
    : typeof n == "number"
    ? (_) => takeAllC(n, _)
    : takeC(Infinity, n);
}
