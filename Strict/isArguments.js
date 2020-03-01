import has from "./has.js";

export default function isArguments(a) {
  return has(a, 'callee');
};