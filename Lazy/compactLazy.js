import identity from "../Strict/identity.js";
import filterL from "./filterLazy.js";

export default function compactL(iter) {
  return filterL(identity, iter);
}