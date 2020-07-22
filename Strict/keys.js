import keysL from "../Lazy/keysL.js";
import takeAll from "./takeAll.js";

export default function keys(a) {
  return takeAll(keysL(a));
}
