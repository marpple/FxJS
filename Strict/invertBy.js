import curry from "./curry.js";
import go from "./go.js";
import go1 from "./go1.js";
import entries from "./entries.js";
import map from "./map.js";
import reduce from "./reduce.js";
import pipe from "./pipe.js";
import reverse1 from "../_internal/reverse1.js";

const invertBy = curry((f, obj) =>
  go(
    obj,
    entries,
    map(pipe(reverse1, ([k, v]) => go1(f(k, v), (_k) => [_k, v]))),
    (iter) =>
      reduce(
        (acc, [k, v]) => ((acc[k] || (acc[k] = [])).push(v), acc),
        {},
        iter
      )
  )
);

export default invertBy;
