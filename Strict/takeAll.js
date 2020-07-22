import take from "./take.js";

export default function takeAll(iter) {
  return take(Infinity, iter);
}
