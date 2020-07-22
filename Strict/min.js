import minBy from "./minBy.js";

export default function min(iter) {
  return minBy((a) => a, iter);
}
