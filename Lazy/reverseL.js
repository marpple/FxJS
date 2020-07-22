import isIterable from "../Strict/isIterable.js";

export default function* reverseL(arr) {
  if (!Array.isArray(arr) && isIterable(arr))
    return yield* reverseL(Array.from(arr));
  let l = arr.length;
  while (l--) yield arr[l];
}
