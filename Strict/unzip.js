import go from "./go.js";
import map from "./map.js";
import sel from "./sel.js";
import ifElse from "./ifElse.js";
import selEq from "./selEquals.js";
import takeAll from "./takeAll.js";
import zip from "./zip.js";

export default function unzip(iter) {
  return go(
    iter,
    takeAll,
    ifElse(
      selEq("length", 1),
      (list) => map(Array.of, sel("0", list)),
      (list) => zip(...list)
    )
  );
}
