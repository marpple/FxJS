const isObject = (a) =>
  a !== null && typeof a === "object" && a.constructor === Object;
export default isObject;
