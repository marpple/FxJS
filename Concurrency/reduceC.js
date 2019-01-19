import reduce from "../reduce.js";
import catchNoop from "./catchNoop.js";
import curry from "../curry.js";

export default curry(function reduceC(f, acc, iter) {
  return arguments.length == 2 ?
    reduce(f, catchNoop([...acc])) :
    reduce(f, acc, catchNoop([...iter]));
});