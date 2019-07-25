export default function curry2(f) {
  return (a, ..._) => _.length > 1
    ? f(a, ..._)
    : (b, ..._) => _.length
      ? f(a, b, ..._)
      : (..._) => f(a, b, ..._);
}