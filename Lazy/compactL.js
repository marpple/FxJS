import identity from "../Strict/identity.js";
import filterL from "./filterL.js";

export default function compactL(iter) {
  return filterL(identity, iter);
}
