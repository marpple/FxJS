import identity from "./identity.js";
import mapEntries from "./mapEntries.js";

export default function promiseAllEntries(entries) {
  return mapEntries(identity, entries);
}
