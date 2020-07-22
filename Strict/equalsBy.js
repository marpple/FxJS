import curry2 from "./curry2.js";

export default curry2(function equalsBy(f, a, b) {
  return f(a) === f(b);
});
