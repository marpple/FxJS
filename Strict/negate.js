import go1 from "./go1.js";
import not from "./not.js";

export default function negate(f) {
  return (..._) => go1(f(..._), not);
}
