import isIterable from "../Strict/isIterable.js";
import last from "../Strict/last.js";
import toIter from "../Strict/toIter.js";
import nop from "../Strict/nop.js";

export default function flatL(iter, depth = 1) {
  let concurCheck = null;
  const iterStack = [toIter(iter)];
  return {
    next: function recur() {
      const iter = last(iterStack);
      if (!iter) return { done: true };
      const cur = iter.next();
      if (cur.done) {
        iterStack.pop();
        return recur();
      } else if (
        iterStack.length <= depth &&
        isIterable(cur.value) &&
        typeof cur.value != "string"
      ) {
        iterStack.push(cur.value[Symbol.iterator]());
        return recur();
      } else if (cur.value instanceof Promise) {
        if (concurCheck && !concurCheck.done) {
          iterStack.length = 0;
          return {
            value: Promise.reject(
              new Error("'L.flat' can not be used with 'C' function.")
            ),
            done: false,
          };
        }
        concurCheck = concurCheck || {};
        return {
          value: cur.value
            .then((value) => {
              if (!concurCheck.hasOwnProperty("done")) concurCheck.done = true;
              if (
                iterStack.length > depth ||
                !isIterable(value) ||
                typeof value == "string"
              )
                return value;
              const iter = value[Symbol.iterator](),
                cur = iter.next();
              return cur.done
                ? Promise.reject(nop)
                : (iterStack.push(iter), cur.value);
            })
            .catch((e) => {
              if (!concurCheck.hasOwnProperty("done")) concurCheck.done = true;
              return Promise.reject(e);
            }),
          done: false,
        };
      } else {
        return cur;
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
