import delay from "../delay.js";
import mapLazy from "./mapLazy.js";
import rangeLazy from "./rangeLazy.js";

export default function intervalLazy(time) {
  return mapLazy(delay(time), rangeLazy(Infinity));
}