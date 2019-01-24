import empty from "./empty.js";

export default function safety(a) {
  return a != null && !!a[Symbol.iterator] ? a : empty;
}