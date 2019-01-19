export default function *entriesLazy(obj) {
  for (const k in obj) yield [k, obj[k]];
}