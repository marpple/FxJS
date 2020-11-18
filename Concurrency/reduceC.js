import reduce from "../Strict/reduce.js";
import catchNoop from "../_internal/catchNoop.js";
import curry from "../Strict/curry.js";

export default curry(function reduceC(f, acc, iter) {
  return arguments.length == 2
    ? reduce(f, catchNoop([...acc]))
    : reduce(f, acc, catchNoop([...iter]));
});
