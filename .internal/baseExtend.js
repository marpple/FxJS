import reduce from "../Strict/reduce.js";
import mapL from "../Lazy/mapLazy.js";
import entriesL from "../Lazy/entriesLazy.js";

export default function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
  (type == 'object' || type == 'function') &&
  reduce(reduce(set), obj, mapL(entriesL, objs));
  return obj;
}