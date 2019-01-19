import keysLazy from "./Lazy/keysLazy.js";
import takeAll from "./takeAll.js";

export default function keys(a) {
  return takeAll(keysLazy(a));
}