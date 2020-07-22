import flatL from "./flatL.js";

export default function deepFlatL(iter) {
  return flatL(iter, Infinity);
}
