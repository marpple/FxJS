import curry from "../Strict/curry.js";
import identity from "../Strict/identity.js";
import differenceByLazy from "./differenceByLazy.js";

export default curry(function differenceLazy(b, a) {
  return differenceByLazy(identity, b, a);
});
  