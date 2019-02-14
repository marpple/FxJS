import takeAll from "./takeAll.js";
import rangeLazy from "./Lazy/rangeLazy.js";

export default function range(..._) {
  return takeAll(rangeLazy(..._));
}