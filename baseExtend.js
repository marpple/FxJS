import reduce from "./reduce.js";
import mapLazy from "./Lazy/mapLazy.js";
import entriesLazy from "./Lazy/entriesLazy.js";

export default function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
    (type == 'object' || type == 'function') &&
      reduce(reduce(set), obj, mapLazy(entriesLazy, objs));
  return obj;
}