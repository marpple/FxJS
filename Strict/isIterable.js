export default function isIterable(a) {
  return a != null && !!a[Symbol.iterator];
}
