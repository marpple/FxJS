import identity from "./identity.js";
import uniqueBy from "./uniqueBy.js";

export default function unique(a) {
  return uniqueBy(identity, a);
}
