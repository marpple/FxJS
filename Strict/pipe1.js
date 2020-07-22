import go1 from "./go1.js";

export default (g, f) => (a) => go1(g(a), f);
