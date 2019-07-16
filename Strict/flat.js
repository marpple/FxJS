import takeAll from "./takeAll.js";
import flatLazy from "../Lazy/flatLazy.js";

export default function flat(iter) {
  return takeAll(flatLazy(iter));
}