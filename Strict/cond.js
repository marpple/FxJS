import go from "./go.js";
import filterL from "../Lazy/filterL.js";
import mapL from "../Lazy/mapL.js";
import head from "./head.js";

export default function cond(...fns) {
  return (...args) =>
    go(
      fns,
      filterL(([c]) => c(...args)),
      mapL(([_, f]) => f(...args)),
      head
    );
}
