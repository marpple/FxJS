import reduce from "./reduce.js";
import mapLazy from "./Lazy/mapLazy.js";

export default function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
  (type == 'object' || type == 'function') &&
  reduce(reduce(set), obj, mapLazy(entries, objs));
  return obj;
}