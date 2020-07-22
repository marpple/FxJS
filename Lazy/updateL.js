import constant from "../Strict/constant.js";
import curry2 from "../Strict/curry2.js";
import updateByL from "./updateByL.js";

export default curry2(function updateL(index, value, iter) {
  return updateByL(index, constant(value), iter);
});
