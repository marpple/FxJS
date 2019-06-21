import curry from '../curry.js';
import go1 from '../go1.js';
import safety from "../safety.js";

export default curry(function* mapLazy(f, iter) {
  for (const a of safety(iter)) yield go1(a, f);
});