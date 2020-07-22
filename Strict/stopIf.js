import match from "./match.js";
import stop from "./stop.js";

export default function stopIf(f, stopVal) {
  return match
    .case(f)(arguments.length == 2 ? (_) => stop(stopVal) : stop)
    .else((a) => a);
}
