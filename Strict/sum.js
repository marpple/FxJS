import reduce from "./reduce";
import add from "./add";

export default function sum(iter) {
  return reduce(add, iter);
}
