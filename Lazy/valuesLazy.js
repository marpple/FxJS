export default function *valuesLazy(obj) {
  for (const k in obj) yield obj[k];
}