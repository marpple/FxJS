import tap from "./tap.js";
import log from "./log.js";

const f = tap(log);

export default function hi(..._) {
  return f(..._);
}
