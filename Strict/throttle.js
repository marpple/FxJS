import curry from "./curry.js";
import delay from "./delay.js";
import blockUntil from "./blockUntil.js";

export default curry(function throttle(f, time) {
  return blockUntil(f, () => delay(time, null));
});
