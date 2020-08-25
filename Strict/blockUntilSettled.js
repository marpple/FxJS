import blockUntil from "./blockUntil.js";
import identity from "./identity.js";

export default function blockUntilSettled(f) {
  return blockUntil(f, identity);
}
