import curry2 from "./curry2.js";

export default curry2(function equalsBy2(f, a, b) {
  return f(a) == f(b);
});
