import takeAll from "./takeAll.js";
import rangeL from "../Lazy/rangeLazy.js";

export default function range(..._) {
  return takeAll(rangeL(..._));
}