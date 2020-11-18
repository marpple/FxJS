import go1 from "../Strict/go1.js";
export default ([a, b]) => go1(a, (_a) => go1(b, (_b) => [_b, _a]));
