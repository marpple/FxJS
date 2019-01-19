import curry from "../curry.js";
import catchNoop from "./catchNoop.js";
import take from "../take.js";

export default curry(function takeC(l, iter) {
  return take(l, catchNoop([...iter]));
});