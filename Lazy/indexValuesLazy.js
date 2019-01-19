export default function *indexValuesLazy(iter) {
  let i = -1;
  for (const a of iter) yield [++i, a];
};