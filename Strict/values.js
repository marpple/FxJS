import valuesLazy from "../Lazy/valuesLazy.js";
import takeAll from "./takeAll.js";

export default function values(a) {
  return takeAll(valuesLazy(a));
}