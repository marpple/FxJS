import takeAll from "./takeAll.js";
import flatLazy from "../Lazy/flatLazy.js";

export default function flat(iter, depth = 1) {
  return takeAll(flatLazy(iter, depth));
}