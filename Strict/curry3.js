export default function curry3(f) {
  return (a, ..._) =>
    _.length > 2
      ? f(a, ..._)
      : _.length === 2
      ? (...__) => f(a, _[0], _[1], ...__)
      : _.length === 1
      ? (b, ...__) =>
          __.length ? f(a, _[0], b, ...__) : (...__) => f(a, _[0], b, ...__)
      : (b, ..._) =>
          _.length > 1
            ? f(a, b, ..._)
            : _.length === 1
            ? (...__) => f(a, b, _[0], ...__)
            : (c, ..._) =>
                _.length ? f(a, b, c, ..._) : (..._) => f(a, b, c, ..._);
}
