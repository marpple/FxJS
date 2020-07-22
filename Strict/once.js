export default function once(f) {
  let done = false,
    res = null;
  return (...args) => (done ? res : ((done = true), (res = f(...args))));
}
