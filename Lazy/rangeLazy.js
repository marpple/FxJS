export default function *rangeLazy(start = 0, stop = start, step = 1) {
  if (arguments.length == 1) start = 0;
  while (start < stop) {
    yield start;
    start += step;
  }
}