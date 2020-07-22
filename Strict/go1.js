export default (a, f) => (a instanceof Promise ? a.then(f) : f(a));
