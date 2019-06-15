export default function *rangeLazy(start = 0, stop = start, step = 1) {
  if (arguments.length === 1) start = 0;
  if (arguments.length < 3 && start > stop) step *= -1;
  const cond = start < stop
    ? _ => start < stop
    : _ => start > stop;
  while (cond()) {
    yield start;
    start += step;
  }
}