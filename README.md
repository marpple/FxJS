[EN](https://github.com/marpple/FxJS) | [KR](https://github.com/marpple/FxJS/blob/master/README_kr.md)

# FxJS - Functional Extensions for Javascript

![npm](https://img.shields.io/npm/v/fxjs)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/fxjs)
![npm](https://img.shields.io/npm/dt/fxjs)
![NPM](https://img.shields.io/npm/l/fxjs)

FxJS is a functional Javascript library based on Iterable / Iterator, Generator, and Promise in ECMAScript 6.

- [Getting Started](#getting-started)
  - [Installation](#Installation)
  - [Iteration protocols](#Iteration-protocols)
  - [Iterable programming](#Iterable-programming)
  - [Lazy evaluation](#Lazy-evaluation)
  - [FRP style](#FRP-style)
  - [Promise/async/await](#promiseasyncawait)
  - [Concurrency](#Concurrency)
  - [Error handling](#Error-handling)
- [API](https://github.com/marpple/FxJS/blob/master/API.md#API)
  - [Function](https://github.com/marpple/FxJS/blob/master/API.md#Function)
  - [Strict](https://github.com/marpple/FxJS/blob/master/API.md#strict)
  - [Predicates](https://github.com/marpple/FxJS/blob/master/API.md#Predicates)
  - [Lazy](https://github.com/marpple/FxJS/blob/master/API.md#lazy)
  - [Concurrency](https://github.com/marpple/FxJS/blob/master/API.md#concurrency)
  - [Stoppable](https://github.com/marpple/FxJS/blob/master/API.md#stoppable)
  - [String](https://github.com/marpple/FxJS/blob/master/API.md#String)
- [Extension Libraries](#Extension-Libraries)
  - [FxSQL](https://github.com/marpple/FxSQL)
  - [FxDOM](https://github.com/marpple/FxDOM)

## Getting Started

### Installation
#### In the browser environment
- Modern Browser (>= 2% and last 2 versions)
  ```html
  <script src="https://unpkg.com/fxjs/dist/fx.js"></script>
  ```
- Legacy Browser (IE11)
  ```html
  <script src="https://unpkg.com/fxjs/dist/fx.es5.js"></script>
  ```
- Usage
  ```html
  <script>
  const { L, C } = window._;
  _.go(
    [1, 2, 3],
    L.map(a => a * a),
    L.map(_.delay(300)),
    C.takeAll,
    _.reduce(_.add),
    console.log
  );
  // '14' output after about 300 ms
  </script>
  ```
  **Note: When the browser loads the `fx.js` script file, `_` is used as a global variable.**

#### In the node.js environment

FxJS is a [Dual Module Package](https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_dual_commonjs_es_module_packages) that supports both CommonJS and ES6 Module.
Among the two module types of the fxjs package, commonjs support `node.js v6` or higher, and ESM is available from `node.js v12` or higher.

```
npm install fxjs
```
- CommonJS (>= node v6)
  ```javascript
  const FxJS = require("fxjs");
  const _ = require("fxjs/Strict");
  const L = require("fxjs/Lazy");
  const C = require("fxjs/Concurrency");
  
  // The module object that exported as default has all the functions in fxjs, including Lazy and Concurrency.
  const { reduce, mapL, takeAllC } = FxJS;
  
  // You can also import the functions individually.
  const rangeL = require("fxjs/Lazy/rangeL");
  _.go(
    rangeL(1, 4),
    L.map(a => a * a),
    L.map(_.delay(300)),
    C.takeAll,
    _.reduce(_.add),
    console.log
  );
  ```
- ES6 Module (>= node v12)
  ```javascript
  import { add, delay, go, reduce, rangeL } from "fxjs";
  import * as L from "fxjs/Lazy";
  import * as C from "fxjs/Concurrency";
  
  go(
    rangeL(1, 4),
    L.map(a => a * a),
    L.map(delay(300)),
    C.takeAll,
    reduce(add),
    console.log
  );
  ```
  
  
#### Dual Package Hazard
FxJS adopted the [Isolate state](https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_approach_2_isolate_state) approach in two ways to support the Dual Module Package, which was introduced in the official Node.js document.
Therefore, when using both CommonJS and ES modules, care must be taken to compare the equivalence of modules or function objects as shown below. For more information, see [Node.js Document](https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_dual_commonjs_es_module_packages).

```javascript
import { createRequire } from "module";
import * as fxjs_mjs from "fxjs";
import go_mjs from "fxjs/Strict/go.js";

const require = createRequire(import.meta.url);
const fxjs_cjs = require('fxjs');
const go_cjs = require('fxjs/Strict/go');

console.log(fxjs_mjs === fxjs_cjs); // false
console.log(go_mjs === go_cjs); // false
console.log(fxjs_cjs.go === go_cjs); // true
console.log(fxjs_mjs.go === go_mjs); // true
```

### Iteration protocols

You can evaluate the iterator as a function of FxJS.

```javascript
function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const f = pipe(
  fibonacci,
  L.filter((n) => n % 2 == 0),
  L.takeWhile((n) => n < 10)
);

const iterator = f();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 8, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

reduce((a, b) => a + b, f());
// 10
```

### Iterable programming

Any value can be used with FxJS if it has a `[Symbol.iterator]()` method.

```javascript
const res = go(
  [1, 2, 3, 4, 5],
  filter((a) => a % 2),
  reduce(add)
);

log(res); // 9
```

### Lazy evaluation

You can do 'lazy evaluation' as a function of the `L` namespace.

```javascript
const res = go(
  L.range(Infinity),
  L.filter((a) => a % 2),
  L.take(3),
  reduce(add)
);

log(res); // 9
```

### FRP style

Functional reactive programming style.

```javascript
go(
  L.range(Infinity),
  L.map(delay(1000)),
  L.map((a) => a + 10),
  L.take(3),
  each(log)
);
// After 1 second 10
// After 2 seconds 11
// After 3 seconds 12
```

### Promise/async/await

Asynchronous control is easy.

```javascript
// L.interval = time => L.map(delay(time), L.range(Infinity));

await go(
  L.interval(1000),
  L.map((a) => a + 30),
  L.takeUntil((a) => a == 33),
  each(log)
);
// After 1 second 30
// After 2 seconds 31
// After 3 seconds 32
// After 4 seconds 33

const res = await go(
  L.interval(1000),
  L.map((a) => a + 20),
  L.takeWhile((a) => a < 23),
  L.map(tap(log)),
  reduce(add)
);
// After 5 seconds 20
// After 6 seconds 21
// After 7 seconds 22

log(res);
// 63
```

### Concurrency

`C` functions can be evaluated concurrency.

```javascript
await map(getPage, range(1, 5));
// After 4 seconds
// [page1, page2, page3, page4]

const pages = await C.map(getPage, range(1, 5));
// After 1 second
// [page1, page2, page3, page4]
```

Like [Clojure Reducers](https://clojure.org/reference/reducers), you can handle concurrency.

```javascript
go(
  range(1, 5),
  map(getPage),
  filter((page) => page.line > 50),
  map(getWords),
  flat,
  countBy(identity),
  log
);
// After 4 seconds
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter((page) => page.line > 50),
  L.map(getWords),
  C.takeAll, // All requests same time.
  flat,
  countBy(identity),
  log
);
// After 1 second
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter((page) => page.line > 50),
  L.map(getWords),
  C.takeAll(2), // 2 requests same time.
  flat,
  countBy(identity),
  log
);
// After 2 second
// { html: 78, css: 36, is: 192 ... }
```

### Error handling

You can use JavaScript standard error handling.

```javascript
const b = go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);

console.log(b);
// 111

try {
  const b = go(
    0,
    (a) => {
      throw { hi: "ho" };
    },
    (a) => a + 10,
    (a) => a + 100
  );

  console.log(b);
} catch (c) {
  console.log(c);
}
// { hi: 'ho' }
```

You can use async/await and try/catch to handle asynchronous error handling.

```javascript
const b = await go(
  0,
  (a) => Promise.resolve(a + 1),
  (a) => a + 10,
  (a) => a + 100
);

console.log(b);
// 111

try {
  const b = await go(
    0,
    (a) => Promise.resolve(a + 1),
    (a) => Promise.reject({ hi: "ho" }),
    (a) => a + 100
  );

  console.log(b);
} catch (c) {
  console.log(c);
}
// { hi: 'ho' }
```

## API

- [Function](https://github.com/marpple/FxJS/blob/master/API.md#Function)
  - [apply](https://github.com/marpple/FxJS/blob/master/API.md#apply)
  - [applyEach](https://github.com/marpple/FxJS/blob/master/API.md#applyEach)
  - [applyMethod](https://github.com/marpple/FxJS/blob/master/API.md#applyMethod)
  - [bindMethod](https://github.com/marpple/FxJS/blob/master/API.md#bindMethod)
  - [call](https://github.com/marpple/FxJS/blob/master/API.md#call)
  - [callEach](https://github.com/marpple/FxJS/blob/master/API.md#callEach)
  - [callMethod](https://github.com/marpple/FxJS/blob/master/API.md#callMethod)
  - [calls](https://github.com/marpple/FxJS/blob/master/API.md#calls)
  - [constant](https://github.com/marpple/FxJS/blob/master/API.md#constant)
  - [curry](https://github.com/marpple/FxJS/blob/master/API.md#curry)
  - [curryN](https://github.com/marpple/FxJS/blob/master/API.md#currN)
  - [debounce](https://github.com/marpple/FxJS/blob/master/API.md#debounce)
  - [go](https://github.com/marpple/FxJS/blob/master/API.md#go)
  - [juxt](https://github.com/marpple/FxJS/blob/master/API.md#juxt)
  - [negate](https://github.com/marpple/FxJS/blob/master/API.md#negate)
  - [once](https://github.com/marpple/FxJS/blob/master/API.md#once)
  - [pipe](https://github.com/marpple/FxJS/blob/master/API.md#pipe)
  - [tap](https://github.com/marpple/FxJS/blob/master/API.md#tap)
  - [throttle](https://github.com/marpple/FxJS/blob/master/API.md#throttle)
- [Strict](https://github.com/marpple/FxJS/blob/master/API.md#strict)
  - [add](https://github.com/marpple/FxJS/blob/master/API.md#add)
  - [append](https://github.com/marpple/FxJS/blob/master/API.md#append)
  - [baseSel](https://github.com/marpple/FxJS/blob/master/API.md#baseSel)
  - [chunk](https://github.com/marpple/FxJS/blob/master/API.md#chunk)
  - [compact](https://github.com/marpple/FxJS/blob/master/API.md#compact)
  - [countBy](https://github.com/marpple/FxJS/blob/master/API.md#countBy)
  - [deepFlat](https://github.com/marpple/FxJS/blob/master/API.md#deepFlat)
  - [defaults](https://github.com/marpple/FxJS/blob/master/API.md#defaults)
  - [defaultTo](https://github.com/marpple/FxJS/blob/master/API.md#defaultTo)
  - [delay](https://github.com/marpple/FxJS/blob/master/API.md#delay)
  - [difference](https://github.com/marpple/FxJS/blob/master/API.md#difference)
  - [differenceBy](https://github.com/marpple/FxJS/blob/master/API.md#differenceBy)
  - [differenceWith](https://github.com/marpple/FxJS/blob/master/API.md#differenceWith)
  - [divide](https://github.com/marpple/FxJS/blob/master/API.md#divide)
  - [drop](https://github.com/marpple/FxJS/blob/master/API.md#drop)
  - [dropRight](https://github.com/marpple/FxJS/blob/master/API.md#dropRight)
  - [dropUntil](https://github.com/marpple/FxJS/blob/master/API.md#dropUntil)
  - [dropWhile](https://github.com/marpple/FxJS/blob/master/API.md#dropWhile)
  - [each](https://github.com/marpple/FxJS/blob/master/API.md#each)
  - [entries](https://github.com/marpple/FxJS/blob/master/API.md#entries)
  - [extend](https://github.com/marpple/FxJS/blob/master/API.md#extend)
  - [filter](https://github.com/marpple/FxJS/blob/master/API.md#filter)
  - [find](https://github.com/marpple/FxJS/blob/master/API.md#find)
  - [findWhere](https://github.com/marpple/FxJS/blob/master/API.md#findWhere)
  - [flat](https://github.com/marpple/FxJS/blob/master/API.md#flat)
  - [flatMap](https://github.com/marpple/FxJS/blob/master/API.md#flatMap)
  - [groupBy](https://github.com/marpple/FxJS/blob/master/API.md#groupBy)
  - [head](https://github.com/marpple/FxJS/blob/master/API.md#head)
  - [identity](https://github.com/marpple/FxJS/blob/master/API.md#identity)
  - [indexBy](https://github.com/marpple/FxJS/blob/master/API.md#indexBy)
  - [initial](https://github.com/marpple/FxJS/blob/master/API.md#initial)
  - [insert](https://github.com/marpple/FxJS/blob/master/API.md#insert)
  - [intersection](https://github.com/marpple/FxJS/blob/master/API.md#intersection)
  - [intersectionBy](https://github.com/marpple/FxJS/blob/master/API.md#intersectionBy)
  - [intersectionWith](https://github.com/marpple/FxJS/blob/master/API.md#intersectionWith)
  - [join](https://github.com/marpple/FxJS/blob/master/API.md#join)
  - [keys](https://github.com/marpple/FxJS/blob/master/API.md#keys)
  - [last](https://github.com/marpple/FxJS/blob/master/API.md#last)
  - [map](https://github.com/marpple/FxJS/blob/master/API.md#map)
  - [mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#mapEntries)
  - [mapObject](https://github.com/marpple/FxJS/blob/master/API.md#mapObject)
  - [max](https://github.com/marpple/FxJS/blob/master/API.md#max)
  - [maxBy](https://github.com/marpple/FxJS/blob/master/API.md#maxBy)
  - [mean](https://github.com/marpple/FxJS/blob/master/API.md#mean)
  - [meanBy](https://github.com/marpple/FxJS/blob/master/API.md#meanBy)
  - [min](https://github.com/marpple/FxJS/blob/master/API.md#min)
  - [minBy](https://github.com/marpple/FxJS/blob/master/API.md#minBy)
  - [multiply](https://github.com/marpple/FxJS/blob/master/API.md#multiply)
  - [noop](https://github.com/marpple/FxJS/blob/master/API.md#noop)
  - [object](https://github.com/marpple/FxJS/blob/master/API.md#object)
  - [omit](https://github.com/marpple/FxJS/blob/master/API.md#omit)
  - [omitBy](https://github.com/marpple/FxJS/blob/master/API.md#omitBy)
  - [partition](https://github.com/marpple/FxJS/blob/master/API.md#partition)
  - [pick](https://github.com/marpple/FxJS/blob/master/API.md#pick)
  - [pickBy](https://github.com/marpple/FxJS/blob/master/API.md#pickBy)
  - [pluck](https://github.com/marpple/FxJS/blob/master/API.md#pluck)
  - [prepend](https://github.com/marpple/FxJS/blob/master/API.md#prepend)
  - [promiseAllEntries](https://github.com/marpple/FxJS/blob/master/API.md#promiseAllEntries)
  - [promiseAllObject](https://github.com/marpple/FxJS/blob/master/API.md#promiseAllObject)
  - [range](https://github.com/marpple/FxJS/blob/master/API.md#range)
  - [reduce](https://github.com/marpple/FxJS/blob/master/API.md#reduce)
  - [reject](https://github.com/marpple/FxJS/blob/master/API.md#reject)
  - [remove](https://github.com/marpple/FxJS/blob/master/API.md#remove)
  - [repeat](https://github.com/marpple/FxJS/blob/master/API.md#repeat)
  - [replace](https://github.com/marpple/FxJS/blob/master/API.md#replace)
  - [sel](https://github.com/marpple/FxJS/blob/master/API.md#sel)
  - [slice](https://github.com/marpple/FxJS/blob/master/API.md#slice)
  - [sort](https://github.com/marpple/FxJS/blob/master/API.md#sort)
  - [sortBy](https://github.com/marpple/FxJS/blob/master/API.md#sortBy)
  - [sortByDesc](https://github.com/marpple/FxJS/blob/master/API.md#sortByDesc)
  - [sortDesc](https://github.com/marpple/FxJS/blob/master/API.md#sortDesc)
  - [split](https://github.com/marpple/FxJS/blob/master/API.md#split)
  - [splitEvery](https://github.com/marpple/FxJS/blob/master/API.md#splitEvery)
  - [subtract](https://github.com/marpple/FxJS/blob/master/API.md#subtract)
  - [sum](https://github.com/marpple/FxJS/blob/master/API.md#sum)
  - [sumBy](https://github.com/marpple/FxJS/blob/master/API.md#sumBy)
  - [tail](https://github.com/marpple/FxJS/blob/master/API.md#tail-rest)
  - [take](https://github.com/marpple/FxJS/blob/master/API.md#take)
  - [take1](https://github.com/marpple/FxJS/blob/master/API.md#take1)
  - [takeAll](https://github.com/marpple/FxJS/blob/master/API.md#takeAll)
  - [takeUntil](https://github.com/marpple/FxJS/blob/master/API.md#takeUntil)
  - [takeWhile](https://github.com/marpple/FxJS/blob/master/API.md#takeWhile)
  - [times](https://github.com/marpple/FxJS/blob/master/API.md#times)
  - [toIter](https://github.com/marpple/FxJS/blob/master/API.md#toIter)
  - [union](https://github.com/marpple/FxJS/blob/master/API.md#union)
  - [unionBy](https://github.com/marpple/FxJS/blob/master/API.md#unionBy)
  - [unionWith](https://github.com/marpple/FxJS/blob/master/API.md#unionWith)
  - [unique](https://github.com/marpple/FxJS/blob/master/API.md#unique)
  - [uniqueBy](https://github.com/marpple/FxJS/blob/master/API.md#uniqueBy)
  - [uniqueWith](https://github.com/marpple/FxJS/blob/master/API.md#uniqueWith)
  - [unzip](https://github.com/marpple/FxJS/blob/master/API.md#unzip)
  - [update](https://github.com/marpple/FxJS/blob/master/API.md#update)
  - [updateBy](https://github.com/marpple/FxJS/blob/master/API.md#updateBy)
  - [values](https://github.com/marpple/FxJS/blob/master/API.md#values)
  - [zip](https://github.com/marpple/FxJS/blob/master/API.md#zip)
  - [zipObj](https://github.com/marpple/FxJS/blob/master/API.md#zipObj)
  - [zipWith](https://github.com/marpple/FxJS/blob/master/API.md#zipWith)
- [Predicates](https://github.com/marpple/FxJS/blob/master/API.md#Predicates)
  - [all](https://github.com/marpple/FxJS/blob/master/API.md#all)
  - [and](https://github.com/marpple/FxJS/blob/master/API.md#and)
  - [any](https://github.com/marpple/FxJS/blob/master/API.md#any)
  - [both](https://github.com/marpple/FxJS/blob/master/API.md#both)
  - [cond](https://github.com/marpple/FxJS/blob/master/API.md#cond)
  - [either](https://github.com/marpple/FxJS/blob/master/API.md#either)
  - [equals](https://github.com/marpple/FxJS/blob/master/API.md#equals)
  - [equals2](https://github.com/marpple/FxJS/blob/master/API.md#equals2)
  - [equalsBy](https://github.com/marpple/FxJS/blob/master/API.md#equalsBy)
  - [equalsBy2](https://github.com/marpple/FxJS/blob/master/API.md#equalsBy2)
  - [every](https://github.com/marpple/FxJS/blob/master/API.md#every)
  - [gt](https://github.com/marpple/FxJS/blob/master/API.md#gt)
  - [gte](https://github.com/marpple/FxJS/blob/master/API.md#gte)
  - [has](https://github.com/marpple/FxJS/blob/master/API.md#has)
  - [ifElse](https://github.com/marpple/FxJS/blob/master/API.md#ifElse)
  - [isArray](https://github.com/marpple/FxJS/blob/master/API.md#isArray)
  - [isFunction](https://github.com/marpple/FxJS/blob/master/API.md#isFunction)
  - [isIterable](https://github.com/marpple/FxJS/blob/master/API.md#isIterable)
  - [isMatch](https://github.com/marpple/FxJS/blob/master/API.md#isMatch)
  - [isNil](https://github.com/marpple/FxJS/blob/master/API.md#isNil)
  - [isNull](https://github.com/marpple/FxJS/blob/master/API.md#isNull)
  - [isObject](https://github.com/marpple/FxJS/blob/master/API.md#isObject)
  - [isString](https://github.com/marpple/FxJS/blob/master/API.md#isString)
  - [isUndefined](https://github.com/marpple/FxJS/blob/master/API.md#isUndefined)
  - [lt](https://github.com/marpple/FxJS/blob/master/API.md#lt)
  - [lte](https://github.com/marpple/FxJS/blob/master/API.md#lte)
  - [match](https://github.com/marpple/FxJS/blob/master/API.md#match)
  - [not](https://github.com/marpple/FxJS/blob/master/API.md#not)
  - [or](https://github.com/marpple/FxJS/blob/master/API.md#or)
  - [satisfiesEvery](https://github.com/marpple/FxJS/blob/master/API.md#satisfiesEvery)
  - [satisfiesSome](https://github.com/marpple/FxJS/blob/master/API.md#satisfiesSome)
  - [selEquals](https://github.com/marpple/FxJS/blob/master/API.md#selEquals)
  - [selSatisfies](https://github.com/marpple/FxJS/blob/master/API.md#selSatisfies)
  - [some](https://github.com/marpple/FxJS/blob/master/API.md#some)
  - [unless](https://github.com/marpple/FxJS/blob/master/API.md#unless)
  - [when](https://github.com/marpple/FxJS/blob/master/API.md#when)
- [Lazy](https://github.com/marpple/FxJS/blob/master/API.md#lazy)
  - [L.append](https://github.com/marpple/FxJS/blob/master/API.md#L.append)
  - [L.chunk](https://github.com/marpple/FxJS/blob/master/API.md#L.chunk)
  - [L.compact](https://github.com/marpple/FxJS/blob/master/API.md#L.compact)
  - [L.concat](https://github.com/marpple/FxJS/blob/master/API.md#L.concat)
  - [L.constant](https://github.com/marpple/FxJS/blob/master/API.md#L.constant)
  - [L.deepFlat](https://github.com/marpple/FxJS/blob/master/API.md#L.deepFlat)
  - [L.difference](https://github.com/marpple/FxJS/blob/master/API.md#L.difference)
  - [L.differenceBy](https://github.com/marpple/FxJS/blob/master/API.md#L.differenceBy)
  - [L.differenceWith](https://github.com/marpple/FxJS/blob/master/API.md#L.differenceWith)
  - [L.drop](https://github.com/marpple/FxJS/blob/master/API.md#L.drop)
  - [L.dropUntil](https://github.com/marpple/FxJS/blob/master/API.md#L.dropUntil)
  - [L.dropWhile](https://github.com/marpple/FxJS/blob/master/API.md#L.dropWhile)
  - [L.empty](https://github.com/marpple/FxJS/blob/master/API.md#L.empty)
  - [L.entries](https://github.com/marpple/FxJS/blob/master/API.md#L.entries)
  - [L.filter](https://github.com/marpple/FxJS/blob/master/API.md#L.filter)
  - [L.flat](https://github.com/marpple/FxJS/blob/master/API.md#L.flat)
  - [L.flatMap](https://github.com/marpple/FxJS/blob/master/API.md#L.flatMap)
  - [L.insert](https://github.com/marpple/FxJS/blob/master/API.md#L.insert)
  - [L.intersection](https://github.com/marpple/FxJS/blob/master/API.md#L.intersection)
  - [L.intersectionBy](https://github.com/marpple/FxJS/blob/master/API.md#L.intersectionBy)
  - [L.intersectionWith](https://github.com/marpple/FxJS/blob/master/API.md#L.intersectionWith)
  - [L.interval](https://github.com/marpple/FxJS/blob/master/API.md#L.interval)
  - [L.keys](https://github.com/marpple/FxJS/blob/master/API.md#L.keys)
  - [L.limitLoad](https://github.com/marpple/FxJS/blob/master/API.md#L.limitLoad)
  - [L.map](https://github.com/marpple/FxJS/blob/master/API.md#L.map)
  - [L.mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#L.mapEntries)
  - [L.prepend](https://github.com/marpple/FxJS/blob/master/API.md#L.prepend)
  - [L.range](https://github.com/marpple/FxJS/blob/master/API.md#L.range)
  - [L.reject](https://github.com/marpple/FxJS/blob/master/API.md#L.reject)
  - [L.remove](https://github.com/marpple/FxJS/blob/master/API.md#L.remove)
  - [L.repeat](https://github.com/marpple/FxJS/blob/master/API.md#L.repeat)
  - [L.reverse](https://github.com/marpple/FxJS/blob/master/API.md#L.reverse)
  - [L.slice](https://github.com/marpple/FxJS/blob/master/API.md#L.slice)
  - [L.splitEvery](https://github.com/marpple/FxJS/blob/master/API.md#L.splitEvery)
  - [L.take](https://github.com/marpple/FxJS/blob/master/API.md#L.take)
  - [L.takeUntil](https://github.com/marpple/FxJS/blob/master/API.md#L.takeUntil)
  - [L.takeWhile](https://github.com/marpple/FxJS/blob/master/API.md#L.takeWhile)
  - [L.times](https://github.com/marpple/FxJS/blob/master/API.md#L.times)
  - [L.union](https://github.com/marpple/FxJS/blob/master/API.md#L.union)
  - [L.unionBy](https://github.com/marpple/FxJS/blob/master/API.md#L.unionBy)
  - [L.unionWith](https://github.com/marpple/FxJS/blob/master/API.md#L.unionWith)
  - [L.unique](https://github.com/marpple/FxJS/blob/master/API.md#L.unique)
  - [L.uniqueBy](https://github.com/marpple/FxJS/blob/master/API.md#L.uniqueBy)
  - [L.uniqueWith](https://github.com/marpple/FxJS/blob/master/API.md#L.uniqueWith)
  - [L.update](https://github.com/marpple/FxJS/blob/master/API.md#L.update)
  - [L.updateBy](https://github.com/marpple/FxJS/blob/master/API.md#L.updateBy)
  - [L.values](https://github.com/marpple/FxJS/blob/master/API.md#L.values)
  - [L.zip](https://github.com/marpple/FxJS/blob/master/API.md#L.zip)
  - [L.zipWithIndex](https://github.com/marpple/FxJS/blob/master/API.md#L.zipWithIndex)
- [Concurrency](https://github.com/marpple/FxJS/blob/master/API.md#concurrency)
  - [C.calls](https://github.com/marpple/FxJS/blob/master/API.md#C.calls)
  - [C.compact](https://github.com/marpple/FxJS/blob/master/API.md#C.compact)
  - [C.drop](https://github.com/marpple/FxJS/blob/master/API.md#C.drop)
  - [C.every](https://github.com/marpple/FxJS/blob/master/API.md#C.every)
  - [C.filter](https://github.com/marpple/FxJS/blob/master/API.md#C.filter)
  - [C.find](https://github.com/marpple/FxJS/blob/master/API.md#C.find)
  - [C.head](https://github.com/marpple/FxJS/blob/master/API.md#C.head)
  - [C.map](https://github.com/marpple/FxJS/blob/master/API.md#C.map)
  - [C.mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#C.mapEntries)
  - [C.object](https://github.com/marpple/FxJS/blob/master/API.md#C.object)
  - [C.race](https://github.com/marpple/FxJS/blob/master/API.md#C.race)
  - [C.reduce](https://github.com/marpple/FxJS/blob/master/API.md#C.reduce)
  - [C.some](https://github.com/marpple/FxJS/blob/master/API.md#C.some)
  - [C.tail](https://github.com/marpple/FxJS/blob/master/API.md#C.tail)
  - [C.take](https://github.com/marpple/FxJS/blob/master/API.md#C.take)
  - [C.take1](https://github.com/marpple/FxJS/blob/master/API.md#C.take1)
  - [C.takeAll](https://github.com/marpple/FxJS/blob/master/API.md#C.takeAll)
  - [C.takeRace](https://github.com/marpple/FxJS/blob/master/API.md#C.takeRace)
- [Stoppable](https://github.com/marpple/FxJS/blob/master/API.md#stoppable)
  - [reduceS, stop](https://github.com/marpple/FxJS/blob/master/API.md#reduces-stop)
  - [goS, pipeS, stop, stopIf](https://github.com/marpple/FxJS/blob/master/API.md#gos-pipes-stop-stopif)
- [String](https://github.com/marpple/FxJS/blob/master/API.md#String)
  - [html](https://github.com/marpple/FxJS/blob/master/API.md#html)
  - [join](https://github.com/marpple/FxJS/blob/master/API.md#join)
  - [strMap](https://github.com/marpple/FxJS/blob/master/API.md#strMap)
  - [string](https://github.com/marpple/FxJS/blob/master/API.md#string)

## Extension Libraries

- [FxSQL](https://github.com/marpple/FxSQL)
- [FxDOM](https://github.com/marpple/FxDOM)

The above libraries are based on FxJS.
FxSQL and FxDOM are libraries that can handle SQL and DOM through functional APIs,respectively.
