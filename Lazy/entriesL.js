export default function* entriesL(obj) {
  for (const k in obj) yield [k, obj[k]];
}
