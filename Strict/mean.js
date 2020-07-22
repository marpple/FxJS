import meanBy from "./meanBy.js";
import identity from "./identity.js";

export default function mean(iter) {
  return meanBy(identity, iter);
}
