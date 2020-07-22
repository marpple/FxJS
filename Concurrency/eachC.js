import mapC from "./mapC.js";
import go1 from "../Strict/go1.js";
import curry from "../Strict/curry.js";

export default curry(function eachC(f, iter) {
  return mapC((a) => go1(f(a), (_) => a), iter);
});
