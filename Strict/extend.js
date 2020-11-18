import baseExtend from "../_internal/baseExtend.js";

const setter = (obj, [k, v]) => ((obj[k] = v), obj);

export default function extend(obj, ...objs) {
  return baseExtend(setter, obj, objs);
}
