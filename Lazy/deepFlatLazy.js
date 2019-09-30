import flatL from "./flatLazy.js";

export default function deepFlatL(iter) {
  return flatL(iter, Infinity);
}