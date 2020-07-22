import takeAll from "./takeAll.js";
import deepFlatL from "../Lazy/deepFlatL.js";

export default function deepFlat(iter) {
  return takeAll(deepFlatL(iter));
}
