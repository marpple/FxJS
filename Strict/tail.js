import drop from "./drop.js";

export default function tail(iter) {
  return drop(1, iter);
}
