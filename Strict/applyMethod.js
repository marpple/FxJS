import curry from "./curry.js";
const applyMethod = curry((name, obj, args) => obj[name].apply(obj, args));
export default applyMethod;
