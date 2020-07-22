import takeAll from "./takeAll.js";
import rangeL from "../Lazy/rangeL.js";

export default function range(..._) {
  return takeAll(rangeL(..._));
}
