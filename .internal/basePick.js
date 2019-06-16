import entriesLazy from "../Lazy/entriesLazy.js";
import go from "../go.js";
import object from "../object.js";

export function basePick(filter, ks, obj) {
  return go(
    obj,
    entriesLazy,
    filter(([k]) => ks.includes(k)),
    object);
}

export default basePick;