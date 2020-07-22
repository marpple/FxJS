import curry from "./curry.js";
import delay from "./delay.js";

export default curry(function debounce(f, time) {
  let i = 0;
  return function _debounce(...args) {
    return delay(time, ++i).then((id) => id === i && f(...args));
  };
});
