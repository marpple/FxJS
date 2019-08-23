import go from "./go.js";
import filterLazy from "../Lazy/filterLazy.js";
import mapLazy from "../Lazy/mapLazy.js";
import head from "./head.js";

export default function cond(...fns) {
  return (...args) => go(
    fns,
    filterLazy(([c]) => c(...args)),
    mapLazy(([_, f]) => f(...args)),
    head
  )
}