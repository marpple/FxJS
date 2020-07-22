export default function blockUntilSettled(f) {
  let is_pending = false;
  return (...args) => {
    if (is_pending) return;
    is_pending = true;
    const res = f(...args);
    return res instanceof Promise
      ? res.finally(() => (is_pending = false))
      : ((is_pending = false), res);
  };
}
