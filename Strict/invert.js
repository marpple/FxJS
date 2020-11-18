import entries from "./entries.js";
import map from "./map.js";
import object from "./object.js";
import pipe from "./pipe.js";
import reverse1 from "../_internal/reverse1.js";

const invert = pipe(entries, map(reverse1), object);

export default invert;
