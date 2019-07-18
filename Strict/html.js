import reduce from "./reduce.js";
import go1 from "./go1.js";
import mapLazy from "../Lazy/mapLazy.js";

export default function html(strs, ...datas) {
  datas = mapLazy(d => d === undefined ? '' : d, datas);
  return go1(
    reduce((res, str) => go1(datas.next().value, data => `${res}${data}${str}`), strs),
    a => a.replace(/\s*(\>|\<)\s*/g, '$1').trim());
}