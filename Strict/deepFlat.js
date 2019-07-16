import takeAll from "./takeAll.js";
import deepFlatLazy from "../Lazy/deepFlatLazy.js";

export default function deepFlat(iter) {
  return takeAll(deepFlatLazy(iter));
}