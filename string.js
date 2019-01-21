import reduce from "./reduce.js";
import curry from "./curry.js";

const sadd = (a, b) => `${a}${b}`;

export default function string(iter) {
  return reduce(sadd, iter);
}