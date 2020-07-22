import delay from "../Strict/delay.js";
import mapL from "./mapL.js";
import rangeL from "./rangeL.js";

export default function intervalL(time) {
  return mapL(delay(time), rangeL(Infinity));
}
