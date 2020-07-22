import curry2 from "./curry2.js";
import identity from "./identity.js";
import ifElse from "./ifElse.js";

export default curry2(function when(cond, f, ...args) {
  return ifElse(cond, f, identity, ...args);
});
