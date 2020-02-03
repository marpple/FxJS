import entries from "./entries.js";
import map from "./map.js";
import object from "./object.js";
import pipe from "./pipe.js";
import reverse from "./reverse.js";

const invert = pipe(
  entries,
  map(reverse),
  object
);

export default invert;