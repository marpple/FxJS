import take from "./take.js";
import go1 from "./go1.js";

export default function head(iter) {
  return go1(take(1, iter), ([h]) => h);
}
