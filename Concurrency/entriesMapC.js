import entriesMapLazy from "../Lazy/entriesMapLazy.js";
import takeAllC from "./takeAllC.js";
import curry from "../curry.js";

export default curry(function entriesMapC(f, iter) {
  return takeAllC(entriesMapLazy(f, iter));
});