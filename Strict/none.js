import find from "./find.js";
import go1 from "./go1.js";
import isUndefined from "./isUndefined.js";

const none = (f, iter) => go1(find(f, iter), isUndefined);
export default none;
