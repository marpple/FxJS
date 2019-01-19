export default function *keysLazy(obj) {
  for (const k in obj) yield k;
};