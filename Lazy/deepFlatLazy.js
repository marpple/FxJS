import flatLazy from "./flatLazy.js";

export default function deepFlatLazy(iter) {
  return flatLazy(iter, Infinity);
}