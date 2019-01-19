import curry from "./curry.js";
import flat from "./flat.js";
import map from "./map.js";

export default curry(function flatMap(f, iter) {
  return flat(map(f, iter));
});