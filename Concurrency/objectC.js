import reduceC from "./reduceC.js";

export default function objectC(iter) {
  return reduceC((obj, [k, v]) => ((obj[k] = v), obj), {}, iter);
}
