import takeC from "./takeC.js";
import go1 from "../Strict/go1.js";

export default function headC(iter) {
  return go1(takeC(1, iter), ([h]) => h);
}
