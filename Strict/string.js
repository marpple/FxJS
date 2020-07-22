import reduce from "./reduce.js";

export default function string(iter) {
  return reduce((a, b) => `${a}${b}`, "", iter);
}
