[EN](https://github.com/marpple/FxJS) | [KR](https://github.com/marpple/FxJS/blob/master/README_kr.md)

# FxJS - Functional Extensions for Javascript

FxJS is a functional programming library based on ECMAScript 6. Iterable, Iterator, Generator, Promise.

- [Getting Started](#getting-started)
  - [Installation](#Installation)
  - [Iteration protocols](#Iteration-protocols)
  - [Iterable programming](#Iterable-programming)
  - [Lazy evaluation](#Lazy-evaluation)
  - [RFP style](#RFP-style)
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
- [Change Log](#Change-Log)

# Getting Started

## Installation

### In Modern Browsers Supporting ES6
- [fx.js](https://github.com/marpple/FxJS/blob/master/dist/fx.js)
- [fx.js.map](https://github.com/marpple/FxJS/blob/master/dist/fx.js.map)
- [fx.min.js](https://github.com/marpple/FxJS/blob/master/dist/fx.min.js)

```html
<script src="path/fx.min.js"></script>
```

### In Legacy ES5 Browsers
- [fx.es5.js](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.js)
- [fx.es5.js.map](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.js.map)
- [fx.es5.min.js](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.min.js)

```html
<script src="path/fx.es5.min.js"></script>
```

### Node and npm

You can bundle it with a webpack.

```
npm install fxjs2
```

```javascript
const { map, filter, reduce, L, C } = require("fxjs2");
```

```javascript
import { map, filter, reduce, L, C } from "fxjs2";
```

## Iteration protocols

You can evaluate the iterator as a function of FxJS.

```javascript
function *fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const f = pipe(
  fibonacci,
  L.filter(n => n % 2 == 0),
  L.takeWhile(n => n < 10));

const iterator = f();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 8, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

reduce((a, b) => a + b, f());
// 10
```

## Iterable programming

Any value can be used with FxJS if it has a `[Symbol.iterator]()` method.

```javascript
const res = go(
  [1, 2, 3, 4, 5],
  filter(a => a % 2),
  reduce(add));

log(res); // 9
```

## Lazy evaluation

You can do 'lazy evaluation' as a function of the `L` namespace.

```javascript
const res = go(
  L.range(Infinity),
  L.filter(a => a % 2),
  L.take(3),
  reduce(add));

log(res); // 9
```

## RFP style

Reactive functional programming style.

```javascript
go(
  L.range(Infinity),
  L.map(delay(1000)),
  L.map(a => a + 10),
  L.take(3),
  each(log));
// After 1 second 10
// After 2 seconds 11
// After 3 seconds 12
```

## Promise/async/await

Asynchronous control is easy.

```javascript
// L.interval = time => L.map(delay(time), L.range(Infinity));

await go(
  L.interval(1000),
  L.map(a => a + 30),
  L.takeUntil(a => a == 33),
  each(log));
// After 1 second 30
// After 2 seconds 31
// After 3 seconds 32
// After 4 seconds 33

const res = await go(
  L.interval(1000),
  L.map(a => a + 20),
  L.takeWhile(a => a < 23),
  L.map(tap(log)),
  reduce(add));
// After 5 seconds 20
// After 6 seconds 21
// After 7 seconds 22

log(res);
// 63
```

## Concurrency

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
  filter(page => page.line > 50),
  map(getWords),
  flat,
  countBy(identity),
  log);
// After 4 seconds
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter(page => page.line > 50),
  L.map(getWords),
  C.takeAll, // All requests same time.
  flat,
  countBy(identity),
  log);
// After 1 second
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter(page => page.line > 50),
  L.map(getWords),
  C.takeAll(2), // 2 requests same time.
  flat,
  countBy(identity),
  log);
// After 2 second
// { html: 78, css: 36, is: 192 ... }
```

## Error handling

You can use JavaScript standard error handling.

```javascript
const b = go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100);

console.log(b);
// 111

try {
  const b = go(
    0,
    a => { throw { hi: 'ho' } },
    a => a + 10,
    a => a + 100);

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
  a => Promise.resolve(a + 1),
  a => a + 10,
  a => a + 100);

console.log(b);
// 111

try {
  const b = await go(
    0,
    a => Promise.resolve(a + 1),
    a => Promise.reject({ hi: 'ho' }),
    a => a + 100);

  console.log(b);
} catch (c) {
  console.log(c);
}
// { hi: 'ho' }
```

# API

- [Function](https://github.com/marpple/FxJS/blob/master/API.md#Function)
  - [go](https://github.com/marpple/FxJS/blob/master/API.md#go)
  - [pipe](https://github.com/marpple/FxJS/blob/master/API.md#pipe)
  - [curry](https://github.com/marpple/FxJS/blob/master/API.md#curry)
  - [tap](https://github.com/marpple/FxJS/blob/master/API.md#tap)
  - [constant](https://github.com/marpple/FxJS/blob/master/API.md#constant)
  - [negate](https://github.com/marpple/FxJS/blob/master/API.md#negate)
  - [call](https://github.com/marpple/FxJS/blob/master/API.md#call)
  - [apply](https://github.com/marpple/FxJS/blob/master/API.md#apply)
  - [calls](https://github.com/marpple/FxJS/blob/master/API.md#calls)
  - [throttle](https://github.com/marpple/FxJS/blob/master/API.md#throttle)
  - [debounce](https://github.com/marpple/FxJS/blob/master/API.md#debounce)
- [Strict](https://github.com/marpple/FxJS/blob/master/API.md#strict)
  - [range](https://github.com/marpple/FxJS/blob/master/API.md#range)
  - [map](https://github.com/marpple/FxJS/blob/master/API.md#map)
  - [mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#mapEntries)
  - [mapObject](https://github.com/marpple/FxJS/blob/master/API.md#mapObject)
  - [pluck](https://github.com/marpple/FxJS/blob/master/API.md#pluck)
  - [flat](https://github.com/marpple/FxJS/blob/master/API.md#flat)
  - [deepFlat](https://github.com/marpple/FxJS/blob/master/API.md#deepFlat)
  - [flatMap](https://github.com/marpple/FxJS/blob/master/API.md#flatMap)
  - [filter](https://github.com/marpple/FxJS/blob/master/API.md#filter)
  - [reject](https://github.com/marpple/FxJS/blob/master/API.md#reject)
  - [compact](https://github.com/marpple/FxJS/blob/master/API.md#compact)
  - [unique](https://github.com/marpple/FxJS/blob/master/API.md#unique)
  - [difference](https://github.com/marpple/FxJS/blob/master/API.md#difference)
  - [differenceBy](https://github.com/marpple/FxJS/blob/master/API.md#differenceBy)
  - [intersection](https://github.com/marpple/FxJS/blob/master/API.md#intersection)
  - [intersectionBy](https://github.com/marpple/FxJS/blob/master/API.md#intersectionBy)
  - [union](https://github.com/marpple/FxJS/blob/master/API.md#union)
  - [unionBy](https://github.com/marpple/FxJS/blob/master/API.md#unionBy)
  - [reduce](https://github.com/marpple/FxJS/blob/master/API.md#reduce)
  - [each](https://github.com/marpple/FxJS/blob/master/API.md#each)
  - [partition](https://github.com/marpple/FxJS/blob/master/API.md#partition)
  - [countBy](https://github.com/marpple/FxJS/blob/master/API.md#countBy)
  - [groupBy](https://github.com/marpple/FxJS/blob/master/API.md#groupBy)
  - [indexBy](https://github.com/marpple/FxJS/blob/master/API.md#indexBy)
  - [max](https://github.com/marpple/FxJS/blob/master/API.md#max)
  - [maxBy](https://github.com/marpple/FxJS/blob/master/API.md#maxBy)
  - [min](https://github.com/marpple/FxJS/blob/master/API.md#min)
  - [minBy](https://github.com/marpple/FxJS/blob/master/API.md#minBy)
  - [sort](https://github.com/marpple/FxJS/blob/master/API.md#sort)
  - [sortBy](https://github.com/marpple/FxJS/blob/master/API.md#sortBy)
  - [sortDesc](https://github.com/marpple/FxJS/blob/master/API.md#sortDesc)
  - [sortByDesc](https://github.com/marpple/FxJS/blob/master/API.md#sortByDesc)
  - [object](https://github.com/marpple/FxJS/blob/master/API.md#object)
  - [pick](https://github.com/marpple/FxJS/blob/master/API.md#pick)
  - [omit](https://github.com/marpple/FxJS/blob/master/API.md#omit)
  - [values](https://github.com/marpple/FxJS/blob/master/API.md#values)
  - [keys](https://github.com/marpple/FxJS/blob/master/API.md#keys)
  - [entries](https://github.com/marpple/FxJS/blob/master/API.md#entries)
  - [extend](https://github.com/marpple/FxJS/blob/master/API.md#extend)
  - [defaults](https://github.com/marpple/FxJS/blob/master/API.md#defaults)
  - [baseSel](https://github.com/marpple/FxJS/blob/master/API.md#baseSel)
  - [sel](https://github.com/marpple/FxJS/blob/master/API.md#sel)
  - [take](https://github.com/marpple/FxJS/blob/master/API.md#take)
  - [takeWhile](https://github.com/marpple/FxJS/blob/master/API.md#takeWhile)
  - [takeUntil](https://github.com/marpple/FxJS/blob/master/API.md#takeUntil)
  - [takeAll](https://github.com/marpple/FxJS/blob/master/API.md#takeAll)
  - [drop](https://github.com/marpple/FxJS/blob/master/API.md#drop)
  - [dropWhile](https://github.com/marpple/FxJS/blob/master/API.md#dropWhile)
  - [dropUntil](https://github.com/marpple/FxJS/blob/master/API.md#dropUntil)
  - [dropRight](https://github.com/marpple/FxJS/blob/master/API.md#dropRight)
  - [head](https://github.com/marpple/FxJS/blob/master/API.md#head)
  - [tail](https://github.com/marpple/FxJS/blob/master/API.md#tail)
  - [last](https://github.com/marpple/FxJS/blob/master/API.md#last)
  - [initial](https://github.com/marpple/FxJS/blob/master/API.md#initial)
  - [find](https://github.com/marpple/FxJS/blob/master/API.md#find)
  - [findWhere](https://github.com/marpple/FxJS/blob/master/API.md#findWhere)
  - [zip](https://github.com/marpple/FxJS/blob/master/API.md#zip)
  - [unzip](https://github.com/marpple/FxJS/blob/master/API.md#unzip)
  - [zipObj](https://github.com/marpple/FxJS/blob/master/API.md#zipObj)
  - [zipWith](https://github.com/marpple/FxJS/blob/master/API.md#zipWith)
  - [delay](https://github.com/marpple/FxJS/blob/master/API.md#delay)
  - [promiseAllObject](https://github.com/marpple/FxJS/blob/master/API.md#promiseAllObject)
  - [promiseAllEntries](https://github.com/marpple/FxJS/blob/master/API.md#promiseAllEntries)
  - [noop](https://github.com/marpple/FxJS/blob/master/API.md#noop)
  - [identity](https://github.com/marpple/FxJS/blob/master/API.md#identity)
- [Predicates](https://github.com/marpple/FxJS/blob/master/API.md#Predicates)
  - [some](https://github.com/marpple/FxJS/blob/master/API.md#some)
  - [every](https://github.com/marpple/FxJS/blob/master/API.md#every)
  - [match](https://github.com/marpple/FxJS/blob/master/API.md#match)
  - [isMatch](https://github.com/marpple/FxJS/blob/master/API.md#isMatch)
  - [isIterable](https://github.com/marpple/FxJS/blob/master/API.md#isIterable)
  - [isFunction](https://github.com/marpple/FxJS/blob/master/API.md#isFunction)
  - [isArray](https://github.com/marpple/FxJS/blob/master/API.md#isArray)
  - [isString](https://github.com/marpple/FxJS/blob/master/API.md#isString)
  - [isUndefined](https://github.com/marpple/FxJS/blob/master/API.md#isUndefined)
- [Lazy](https://github.com/marpple/FxJS/blob/master/API.md#lazy)
  - [L.range](https://github.com/marpple/FxJS/blob/master/API.md#lrange)
  - [L.map](https://github.com/marpple/FxJS/blob/master/API.md#lmap)
  - [L.filter](https://github.com/marpple/FxJS/blob/master/API.md#lfilter)
  - [L.reject](https://github.com/marpple/FxJS/blob/master/API.md#lreject)
  - [L.compact](https://github.com/marpple/FxJS/blob/master/API.md#lcompact)
  - [L.mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#lmapEntries)
  - [L.entries](https://github.com/marpple/FxJS/blob/master/API.md#lentries)
  - [L.values](https://github.com/marpple/FxJS/blob/master/API.md#lvalues)
  - [L.keys](https://github.com/marpple/FxJS/blob/master/API.md#lkeys)
  - [L.indexValues](https://github.com/marpple/FxJS/blob/master/API.md#lindexValues)
  - [L.flat](https://github.com/marpple/FxJS/blob/master/API.md#lflat)
  - [L.flatMap](https://github.com/marpple/FxJS/blob/master/API.md#lflatMap)
  - [L.deepFlat](https://github.com/marpple/FxJS/blob/master/API.md#ldeepFlat)
  - [L.reverse](https://github.com/marpple/FxJS/blob/master/API.md#lreverse)
  - [L.take](https://github.com/marpple/FxJS/blob/master/API.md#ltake)
  - [L.takeWhile](https://github.com/marpple/FxJS/blob/master/API.md#ltakeWhile)
  - [L.takeUntil](https://github.com/marpple/FxJS/blob/master/API.md#ltakeUntil)
  - [L.drop](https://github.com/marpple/FxJS/blob/master/API.md#ldrop)
  - [L.dropWhile](https://github.com/marpple/FxJS/blob/master/API.md#ldropWhile)
  - [L.dropUntil](https://github.com/marpple/FxJS/blob/master/API.md#ldropUntil)
  - [L.difference](https://github.com/marpple/FxJS/blob/master/API.md#ldifference)
  - [L.differenceBy](https://github.com/marpple/FxJS/blob/master/API.md#ldifferenceBy)
  - [L.intersection](https://github.com/marpple/FxJS/blob/master/API.md#lintersection)
  - [L.intersectionBy](https://github.com/marpple/FxJS/blob/master/API.md#lintersectionBy)
  - [L.union](https://github.com/marpple/FxJS/blob/master/API.md#lunion)
  - [L.unionBy](https://github.com/marpple/FxJS/blob/master/API.md#lunionBy)
  - [L.interval](https://github.com/marpple/FxJS/blob/master/API.md#linterval)
- [Concurrency](https://github.com/marpple/FxJS/blob/master/API.md#concurrency)
  - [C.calls](https://github.com/marpple/FxJS/blob/master/API.md#ccalls)
  - [C.takeAll](https://github.com/marpple/FxJS/blob/master/API.md#ctakeAll)
  - [C.takeRace](https://github.com/marpple/FxJS/blob/master/API.md#ctakeRace)
  - [C.race](https://github.com/marpple/FxJS/blob/master/API.md#crace)
  - [C.map](https://github.com/marpple/FxJS/blob/master/API.md#cmap)
  - [C.mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#cmapEntries)
  - [C.filter](https://github.com/marpple/FxJS/blob/master/API.md#cfilter)
  - [C.compact](https://github.com/marpple/FxJS/blob/master/API.md#ccompact)
  - [C.reduce](https://github.com/marpple/FxJS/blob/master/API.md#creduce)
  - [C.take](https://github.com/marpple/FxJS/blob/master/API.md#ctake)
  - [C.drop](https://github.com/marpple/FxJS/blob/master/API.md#cdrop)
  - [C.take1](https://github.com/marpple/FxJS/blob/master/API.md#ctake1)
  - [C.head](https://github.com/marpple/FxJS/blob/master/API.md#chead)
  - [C.tail](https://github.com/marpple/FxJS/blob/master/API.md#ctail)
  - [C.find](https://github.com/marpple/FxJS/blob/master/API.md#cfind)
  - [C.every](https://github.com/marpple/FxJS/blob/master/API.md#cevery)
  - [C.some](https://github.com/marpple/FxJS/blob/master/API.md#csome)
- [Stoppable](https://github.com/marpple/FxJS/blob/master/API.md#stoppable)
  - [reduceS, stop](https://github.com/marpple/FxJS/blob/master/API.md#reduces-stop)
  - [goS, pipeS, stop, stopIf](https://github.com/marpple/FxJS/blob/master/API.md#gos-pipes-stop-stopif)
- [String](https://github.com/marpple/FxJS/blob/master/API.md#String)
  - [string](https://github.com/marpple/FxJS/blob/master/API.md#string)
  - [strMap](https://github.com/marpple/FxJS/blob/master/API.md#strMap)
  - [join](https://github.com/marpple/FxJS/blob/master/API.md#join)
  - [html](https://github.com/marpple/FxJS/blob/master/API.md#html)

# Change Log