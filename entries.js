import entriesLazy from "./Lazy/entriesLazy.js";
import takeAll from "./takeAll.js";

export default function entries(a) {
  return takeAll(entriesLazy(a));
}