import zipL from "../Lazy/zipL.js";
import curry from "./curry.js";
import map from "./map.js";

export default curry(function zipWith(f, ...iterables) {
  return map((group) => f(...group), zipL(...iterables));
});
