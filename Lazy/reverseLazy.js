export default function* reverseL(arr) {
  var l = arr.length;
  while (l--) yield arr[l];
}