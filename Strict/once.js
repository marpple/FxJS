export default function once(f) {
  let done = false;
  return function(...args) {
    return done ? undefined : (done = true, f(...args));
  }
}