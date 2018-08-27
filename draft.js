const { range, curry, lmap, lfilter, all } = require('esm')(module)('./fx.js');

const Lmap = curry(function *(f, coll) {
  for (var a of coll) {
    yield f(a);
  }
});

const Lfilter = curry(function *(f, coll) {
  for (var a of coll) {
    if (f(a)) yield a;
  }
});

const Smap = curry(function(f, coll) {
  var res = [];
  for (var a of coll) {
    res.push(f(a));
  }
  return res;
});

const Sfilter = curry(function(f, coll) {
  var res = [];
  for (var a of coll) {
    if (f(a)) res.push(a);
  }
  return res;
});

// console.time();
// go(
//   range(200000),
//   Lmap(a => a + 10),
//   Lfilter(a => a % 2),
//   all
// );
// console.timeEnd();

// console.time();
// go(
//   range(200000),
//   lmap(a => a + 10),
//   lfilter(a => a % 2),
//   all
// );
// console.timeEnd();
//
// console.time();
// go(
//   range(200000),
//   Smap(a => a + 10),
//   Sfilter(a => a % 2),
//   all
// );
// console.timeEnd();

//
// var a = lfilter(a => Promise.resolve(a % 2), range(8));
// a.next().then(console.log);
// a.next().then(console.log);
// a.next().then(console.log);
console.log([...lfilter(a => a % 2, range(8))]);

console.log(all(lmap(a => a + 10, range(8))));
// all(lmap(a => Promise.resolve(a + 10), range(8))).then(console.log);

// all(lmap(a => a + 10, lmap(a => Promise.resolve(a + 10), range(8)))).then(console.log);
//
// all(lmap(a => a + 10, lfilter(a => Promise.resolve(a % 2), lmap(a => Promise.resolve(a + 10), range(8))))).then(console.log)
// console.log(all(lfilter(a => a % 2, range(8))));

// const reduceB = () => {
//
// };

// const baseTake = (iterable)

// const take = (limit, iter) => {
//   if (typeof limit == "number") return iter => take(limit, iter);
//
//   if (arguments.length == 1) {
//     const [head] = limit;
//     return head;
//   }
//
//   iter = collIter(iter);
//   var res = [];
//   return function recur(res, evd) {
//     do {
//       var cur = iter.next();
//       if (cur.done) return res;
//       evd = cur.value;
//     } while (!(evd instanceof Promise));
//     return go(evd, b => b ? push3(res, b) : recur());
//   } (res)
// };

// const
//   findVal = (f, coll) => go(
//     collIter(coll),
//     lmap(f),
//     lfilter(a => a != null),
//     take);