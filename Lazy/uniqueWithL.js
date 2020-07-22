import curry from "../Strict/curry.js";
import rejectL from "./rejectL.js";
import some from "../Strict/some.js";
import ifElse from "../Strict/ifElse.js";

export default curry(function uniqueWithL(f, iter) {
  const res = [];
  return rejectL(
    ifElse(
      (a) => some((v) => f(a, v), res),
      (_) => true,
      (a) => void res.push(a)
    ),
    iter
  );
});
