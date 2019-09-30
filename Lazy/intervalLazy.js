import delay from "../Strict/delay.js";
import mapL from "./mapLazy.js";
import rangeL from "./rangeLazy.js";

export default function intervalL(time) {
  return mapL(delay(time), rangeL(Infinity));
}