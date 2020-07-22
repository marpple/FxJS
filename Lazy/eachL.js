import mapL from "./mapL.js";
import tap from "../Strict/tap.js";
import curry from "../Strict/curry.js";

const eachL = curry((f, iter) => mapL(tap(f), iter));
export default eachL;
