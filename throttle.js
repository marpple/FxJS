import curry from "./curry.js";
import delay from "delay.js";

export default curry(function throttle(f, time) {
  let block = false;
  return function _throttle(...args) {
    if (block) return;
    block = true;
    delay(time, null).then(_ => (block = false));
    return f(...args);
  };
});