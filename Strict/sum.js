import add from "./add.js";
import reduce from "./reduce.js";

export default function sum(iter) {
  return reduce(add, iter);
}
