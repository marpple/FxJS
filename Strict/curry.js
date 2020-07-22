export default function curry(f) {
  return (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));
}
