import deepEntriesL from "../.internal/entriesDeepL.js";
import objectDeep from "../.internal/objectDeep.js";

export default function clone(obj) {
  return objectDeep(deepEntriesL(obj));
}