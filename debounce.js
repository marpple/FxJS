import curry from "./curry.js";
import delay from "delay.js";

export default curry(function debounce(f, time) {
  let queue = [];
  return function _debounce(...args) {
    queue.push(delay(time, queue.length + 1));
    Promise.all(queue).then(lens => {
      if (lens.pop() === queue.length) {
        queue = [];
        return f(...args);
      }
    });
  };
});