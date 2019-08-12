import constant from "../Strict/constant.js";
import curry2 from "../Strict/curry2.js";
import updateByLazy from "./updateByLazy.js";

export default curry2(function updateLazy(index, value, iter) {
  return updateByLazy(index, constant(value), iter);
});