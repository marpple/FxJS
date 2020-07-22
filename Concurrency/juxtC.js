import mapC from "./mapC.js";

export default function juxtC(...fns) {
  return (...args) => mapC((f) => f(...args), fns);
}
