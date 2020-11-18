import curry from "../Strict/curry.js";
import catchNoop from "../_internal/catchNoop.js";
import take from "../Strict/take.js";

export default curry(function takeC(l, iter) {
  return take(l, catchNoop([...iter]));
});
