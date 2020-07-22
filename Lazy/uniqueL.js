import uniqueByL from "./uniqueByL.js";
import identity from "../Strict/identity.js";

export default function uniqueL(obj) {
  return uniqueByL(identity, obj);
}
