import uniqueBy from "./uniqueBy.js";

export default function unique(iter) {
  return uniqueBy(a => a, iter);
}