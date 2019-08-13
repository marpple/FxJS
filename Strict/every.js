import everyBy from "./everyBy.js";
import identity from "./identity.js";

export default function every(iter) {
  return everyBy(identity, iter);
}