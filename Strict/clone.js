import deepEntriesL from "../_internal/entriesDeepL.js";
import objectDeep from "../_internal/objectDeep.js";

export default function clone(obj) {
  return objectDeep(deepEntriesL(obj));
}
