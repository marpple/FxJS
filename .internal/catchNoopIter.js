export default (arr) => (
  arr.forEach(
    (a) => a.value instanceof Promise && a.value.catch(function () {})
  ),
  arr
);
