import curry from "../Strict/curry.js";
import rejectLazy from "./rejectLazy.js";
import some from "../Strict/some.js";
import ifElse from "../Strict/ifElse.js";

export default curry(function uniqueWithLazy(f, iter) {
  const res = [];
  return rejectLazy(
    ifElse(
      a => some(v => f(a, v), res),
      _ => true,
      a => void res.push(a)
    ),
    iter);
});