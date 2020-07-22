import some from "./some.js";
import identity from "./identity.js";

export default function any(iter) {
  return some(identity, iter);
}
