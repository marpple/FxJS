import baseExtend from "../_internal/baseExtend.js";
import has from "./has.js";

const setter = (obj, [k, v]) => {
  return has(k, obj) || ((obj[k] = v), obj), obj;
};

export default function defaults(obj, ...objs) {
  return baseExtend(setter, obj, objs);
}
