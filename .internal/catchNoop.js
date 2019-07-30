export default function catchNoop(arr) {
  arr.forEach(a => a instanceof Promise ? a.catch(function() {}) : a);
  return arr;
}