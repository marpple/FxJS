import curry from "./curry.js";
import go1 from "./go1.js";

export default curry(function blockUntil(f, predicate) {
  let block = false;
  return function (...args) {
    if (block) return;
    block = true;
    const res = f(...args);
    go1(predicate(res), () => (block = false)).finally(() => (block = false));
    return res;
  };
});
