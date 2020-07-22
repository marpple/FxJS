export default (arr) => (
  arr.forEach((a) => a instanceof Promise && a.catch(function () {})), arr
);
