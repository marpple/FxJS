import pipe from "../Strict/pipe.js";
import isArray from "../Strict/isArray.js";

const arrComparator = (arr) => (a, b) => {
  let i = -1;
  while (++i < arr.length) {
    const ai = a[arr[i]],
      bi = b[arr[i]];
    if (ai === bi) continue;
    return ai < bi ? -1 : 1;
  }
  return 0;
};

export default function baseSortBy(left, right, f, arr) {
  return isArray(f)
    ? baseSortBy(left, right, arrComparator(f), arr)
    : typeof f == "string"
    ? baseSortBy(left, right, (a) => a[f], arr)
    : f.length == 2
    ? [...arr].sort(right == -1 ? pipe(f, (n) => n * -1) : f)
    : [...arr].sort((a, b, fa = f(a), fb = f(b)) =>
        fa == fb ? 0 : fa < fb ? left : right
      );
}
