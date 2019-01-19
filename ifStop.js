import curry from "./curry.js";
import match from "./match.js";
import stop from "./stop.js";

export default curry((f, a) => match(a).case(f)(stop).else(a => a));