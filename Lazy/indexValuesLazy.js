import safety from "../safety.js";

export default function *indexValuesLazy(iter) {
  let i = -1;
  for (const a of safety(iter)) yield [++i, a];
};