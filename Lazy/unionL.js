import curry from "../Strict/curry.js";
import identity from "../Strict/identity.js";
import unionByL from "./unionByL.js";

export default curry(function unionL(a, b) {
  return unionByL(identity, a, b);
});
