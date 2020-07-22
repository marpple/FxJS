import nop from "../Strict/nop.js";

export default function go2(acc, a, f) {
  return a instanceof Promise
    ? a.then(
        (a) => f(acc, a),
        (e) => (e == nop ? acc : Promise.reject(e))
      )
    : f(acc, a);
}
