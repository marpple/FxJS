import toIter from "../toIter.js";

export default function* indexValuesLazy(iter) {
  let i = -1;
  for (const a of toIter(iter)) yield [++i, a];
};