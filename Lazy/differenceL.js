import curry from "../Strict/curry.js";
import identity from "../Strict/identity.js";
import differenceByL from "./differenceByL.js";

export default curry(function differenceL(b, a) {
  return differenceByL(identity, b, a);
});
