export default function go1(a, f) {
  return a instanceof Promise ? a.then(f) : f(a);
}