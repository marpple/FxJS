import curry from "../curry.js";
import identity from "../identity.js";
import differenceByLazy from "./differenceByLazy.js";

export default curry(function differenceLazy(b, a) {
  return differenceByLazy(identity, b, a);
});
  