import entriesL from "../Lazy/entriesL.js";
import takeAll from "./takeAll.js";

export default function entries(a) {
  return takeAll(entriesL(a));
}
