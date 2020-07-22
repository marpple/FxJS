import every from "./every.js";
import identity from "./identity.js";

export default function all(iter) {
  return every(identity, iter);
}
