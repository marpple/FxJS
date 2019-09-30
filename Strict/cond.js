import go from "./go.js";
import filterL from "../Lazy/filterLazy.js";
import mapL from "../Lazy/mapLazy.js";
import head from "./head.js";

export default function cond(...fns) {
  return (...args) => go(
    fns,
    filterL(([c]) => c(...args)),
    mapL(([_, f]) => f(...args)),
    head
  )
}