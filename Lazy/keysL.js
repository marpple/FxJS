export default function* keysL(obj) {
  for (const k in obj) yield k;
}
