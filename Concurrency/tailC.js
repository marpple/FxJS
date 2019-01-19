import takeAllC from "./takeAllC.js";
import tail from "../tail.js";

export default function tailC(iter) {
  return tail(takeAllC(iter));
}