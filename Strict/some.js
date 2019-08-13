import someBy from "./someBy.js";
import identity from "./identity.js";

export default function some(iter) {
  return someBy(identity, iter);
}