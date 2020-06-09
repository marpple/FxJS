import go from "./go.js";
import entries from "./entries.js";
import object from "./object.js";
import curry from "./curry.js";
import identity from "./identity.js";
import map from "./map.js";

export default curry(function evolve(dict, obj) {
  return go(
    obj,
    entries,
    map(([k, v]) => go(
      v,
      v => typeof v === 'object'
        ? evolve(dict[k] || {}, v)
        : (dict[k] || identity)(v),
      v => [k, v]
    )),
    object
  )
});