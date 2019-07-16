import curry from "../Strict/curry.js";
import catchNoop from "../.internal/catchNoop.js";
import drop from "../Strict/drop.js";

export default curry(function dropC(l, iter) {
  return drop(l, catchNoop([...iter]));
});