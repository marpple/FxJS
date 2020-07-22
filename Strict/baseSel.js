import curry from "./curry.js";
import isArray from "./isArray.js";
import reduce from "./reduce.js";
import findWhere from "./findWhere.js";

export default (sep) =>
  curry(function sel(selector, acc) {
    return !selector
      ? acc
      : isArray(selector)
      ? reduce((acc, selector) => sel(selector, acc), acc, selector)
      : typeof selector == "object" || typeof selector == "function"
      ? findWhere(selector, acc)
      : reduce(
          (acc, key, s = key[0]) =>
            !acc
              ? undefined
              : s == "#"
              ? findWhere({ id: key.substr(1) }, acc)
              : s == "[" || s == "{"
              ? findWhere(JSON.parse(key), acc)
              : acc[key],
          acc,
          selector.split(sep)
        );
  });
