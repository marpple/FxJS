import takeAll from "./takeAll.js";
import flatL from "../Lazy/flatL.js";

export default function flat(iter, depth = 1) {
  return takeAll(flatL(iter, depth));
}
