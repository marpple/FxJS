export default function* valuesL(obj) {
  for (const k in obj) yield obj[k];
}
