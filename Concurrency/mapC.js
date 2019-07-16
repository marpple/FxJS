import mapLazy from "../Lazy/mapLazy.js";
import takeAllC from "./takeAllC.js";
import curry from "../Strict/curry.js";

export default curry(function mapC(f, iter) {
  return takeAllC(mapLazy(f, iter));
});