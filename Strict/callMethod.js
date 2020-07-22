import curry from "./curry.js";
const callMethod = curry((name, obj, ...args) => obj[name].call(obj, ...args));
export default callMethod;
