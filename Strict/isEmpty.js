import isArguments from "./isArguments.js";
import isArray from "./isArray.js";
import isNil from "./isNil.js";
import isString from "./isString.js";
import keys from "./keys.js";

export default function isEmpty(a) {
  return (
    isNil(a) ? true
      :
    isArguments(a) || isArray(a) || isString(a) ? !a.length
      :
    !keys(a).length
  );
};