import curry from "../curry.js";
import identity from "../identity.js";
import differenceByLazy from "./differenceByLazy.js";

export default curry(function differenceLazy(a, b) {
  return differenceByLazy(identity, a, b);
});
  