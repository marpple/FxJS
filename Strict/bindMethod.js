import curry from "./curry.js";
const bindMethod = curry((name, obj, ...args) => obj[name].bind(obj, ...args));
export default bindMethod;
