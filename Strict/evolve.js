import go from "./go.js";
import entries from "./entries.js";
import object from "./object.js";
import curry from "./curry.js";
import identity from "./identity.js";
import map from "./map.js";
import isObject from "./isObject.js";

export default curry(function evolve(dict, obj) {
  return go(
    obj,
    entries,
    map(([k, v]) =>
      go(
        v,
        (v) =>
          isObject(v) ? evolve(dict[k] || {}, v) : (dict[k] || identity)(v),
        (v) => [k, v]
      )
    ),
    object
  );
});
