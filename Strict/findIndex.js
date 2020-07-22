import zipWithIndexL from "../Lazy/zipWithIndexL.js";
import defaultTo from "./defaultTo.js";
import go from "./go.js";
import go1 from "./go1.js";
import head from "./head.js";
import find from "./find.js";

const findIndex = (f, iter) =>
  go(
    iter,
    zipWithIndexL,
    find(([_i, a]) => go1(a, f)),
    defaultTo([-1]),
    head
  );

export default findIndex;
