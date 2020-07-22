import curry from "../Strict/curry.js";
import identity from "../Strict/identity.js";
import intersectionByL from "./intersectionByL.js";

export default curry(function intersectionL(a, b) {
  return intersectionByL(identity, a, b);
});
