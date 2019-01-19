export default function *reverseLazy(arr) {
  var l = arr.length;
  while (l--) yield arr[l];
}