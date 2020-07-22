import map from "./map.js";

export default function juxt(...fns) {
  return (...args) => map((f) => f(...args), fns);
}
