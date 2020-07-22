import filterL from "./filterL.js";
import curry from "../Strict/curry.js";
import go1 from "../Strict/go1.js";
import not from "../Strict/not.js";

export default curry(function rejectL(f, iter) {
  return filterL((a) => go1(f(a), not), iter);
});
