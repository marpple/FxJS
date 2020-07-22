import maxBy from "./maxBy.js";

export default function max(iter) {
  return maxBy((a) => a, iter);
}
