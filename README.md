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
- [API](#API)
  - [Strict](#Strict)
  - [Lazy](#Lazy)
  - [Concurrency](#Concurrency)
  - [Stoppable](#Stoppable)
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
await map(getPage, range(1, 6));
// After 5 seconds
// [page1, page2, page3, page4, page5]

const pages = await C.map(getPage, range(1, 6));
// After 1 second
// [page1, page2, page3, page4, page5]
```

Like [Clojure Reducers](#https://clojure.org/reference/reducers), you can handle concurrency.

```javascript
go(
  range(1, 7),
  map(getPage),
  filter(page => page.line > 50),
  map(getWords),
  flat,
  countBy(identity),
  log);
// After 5 seconds
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 7),
  L.map(getPage),
  L.filter(page => page.line > 50),
  L.map(getWords),
  C.takeAll,
  flat,
  countBy(identity),
  log);
// After 1 second
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

- [Function](#Function)
  - [go](#go)
  - [pipe](#pipe)
  - [curry](#curry)
  - [tap](#tap)
  - [constant](#constant)
  - [negate](#negate)
  - [call](#call)
  - [apply](#apply)
  - [calls](#calls)
- [Strict](#strict)
  - [range](#range)
  - [map](#map)
  - [mapEntries](#mapEntries)
  - [mapObject](#mapObject)
  - [pluck](#pluck)
  - [flat](#flat)
  - [deepFlat](#deepFlat)
  - [flatMap](#flatMap)
  - [filter](#filter)
  - [reject](#reject)
  - [compact](#compact)
  - [unique](#unique)
  - [difference](#difference)
  - [differenceBy](#differenceBy)
  - [intersection](#intersection)
  - [intersectionBy](#intersectionBy)
  - [union](#union)
  - [unionBy](#unionBy)
  - [reduce](#reduce)
  - [each](#each)
  - [partition](#partition)
  - [countBy](#countBy)
  - [groupBy](#groupBy)
  - [indexBy](#indexBy)
  - [max](#max)
  - [maxBy](#maxBy)
  - [min](#min)
  - [minBy](#minBy)
  - [sort](#sort)
  - [sortBy](#sortBy)
  - [sortDesc](#sortDesc)
  - [sortByDesc](#sortByDesc)
  - [object](#object)
  - [pick](#pick)
  - [omit](#omit)
  - [values](#values)
  - [keys](#keys)
  - [entries](#entries)
  - [extend](#extend)
  - [defaults](#defaults)
  - [baseSel](#baseSel)
  - [sel](#sel)
  - [take](#take)
  - [takeWhile](#takeWhile)
  - [takeUntil](#takeUntil)
  - [takeAll](#takeAll)
  - [drop](#drop)
  - [dropWhile](#dropWhile)
  - [dropUntil](#dropUntil)
  - [dropRight](#dropRight)
  - [head](#head)
  - [tail](#tail)
  - [last](#last)
  - [initial](#initial)
  - [find](#find)
  - [findWhere](#findWhere)
  - [zip](#zip)
  - [unzip](#unzip)
  - [zipObj](#zipObj)
  - [zipWith](#zipWith)
  - [delay](#delay)
  - [promiseAllObject](#promiseAllObject)
  - [promiseAllEntries](#promiseAllEntries)
  - [noop](#noop)
  - [identity](#identity)
- [Predicates](#Predicates)
  - [some](#some)
  - [every](#every)
  - [match](#match)
  - [isMatch](#isMatch)
  - [isIterable](#isIterable)
  - [isFunction](#isFunction)
  - [isArray](#isArray)
  - [isString](#isString)
  - [isUndefined](#isUndefined)
- [Lazy](#lazy)
  - [L.range](#lrange)
  - [L.map](#lmap)
  - [L.filter](#lfilter)
  - [L.reject](#lreject)
  - [L.compact](#lcompact)
  - [L.mapEntries](#lmapEntries)
  - [L.entries](#lentries)
  - [L.values](#lvalues)
  - [L.keys](#lkeys)
  - [L.indexValues](#lindexValues)
  - [L.flat](#lflat)
  - [L.flatMap](#lflatMap)
  - [L.deepFlat](#ldeepFlat)
  - [L.reverse](#lreverse)
  - [L.take](#ltake)
  - [L.takeWhile](#ltakeWhile)
  - [L.takeUntil](#ltakeUntil)
  - [L.drop](#ldrop)
  - [L.dropWhile](#ldropWhile)
  - [L.dropUntil](#ldropUntil)
  - [L.difference](#ldifference)
  - [L.differenceBy](#ldifferenceBy)
  - [L.intersection](#lintersection)
  - [L.intersectionBy](#lintersectionBy)
  - [L.union](#lunion)
  - [L.unionBy](#lunionBy)
  - [L.interval](#linterval)
- [Concurrency](#concurrency)
  - [C.calls](#ccalls)
  - [C.takeAll](#ctakeAll)
  - [C.takeRace](#ctakeRace)
  - [C.race](#crace)
  - [C.map](#cmap)
  - [C.mapEntries](#cmapEntries)
  - [C.filter](#cfilter)
  - [C.compact](#ccompact)
  - [C.reduce](#creduce)
  - [C.take](#ctake)
  - [C.drop](#cdrop)
  - [C.take1](#ctake1)
  - [C.head](#chead)
  - [C.tail](#ctail)
  - [C.find](#cfind)
  - [C.every](#cevery)
  - [C.some](#csome)
- [Stoppable](#stoppable)
  - [reduceS, stop](#reduces-stop)
  - [goS, pipeS, stop, stopIf](#gos-pipes-stop-stopif)
- [String](#String)
  - [string](#string)
  - [strMap](#strMap)
  - [join](#join)
  - [html](#html)

## Function

### go

```javascript
go(0, a => a + 1, a => a + 10, log); // 11
go(0, a => Promise.resolve(a + 1), a => a + 10, log); // 11

const b = go(0, a => a + 1, a => a + 10);
log(b); // 11

const pb = go(0, a => Promise.resolve(a + 1), a => a + 10);
pb.then(log); // 11
```

### pipe

```javascript
const f1 = pipe(a => a.toUpperCase(), a => a == 'A');
const b = f1('a');
log(b); // true

const total = f => pipe(
  map(f),
  reduce((a, b) => a + b));

const totalAge = total(({age}) => age);

go(
  fetchUsers(),
  totalAge,
  log);

go(
  fetchProducts(),
  total(({price}) => price),
  log);
```

### curry

```javascript
const add = curry((a, b) => a + b);
const add10 = add(10);
add10(5); // 15
```

### tap
### constant
### negate
### call
### apply
### calls

## Strict

### range

### map

```javascript
map(a => a + 10, [1, 2, 3]);
// [11, 12, 13]
```

### mapEntries
### mapObject
### pluck

### flat
### deepFlat
### flatMap

### filter

```javascript
filter(a => a % 2, [1, 2, 3]);
// [1, 3]
```

### reject
### compact
### unique
### difference
### differenceBy
### intersection
### intersectionBy
### union
### unionBy

### reduce

```javascript
const add = (a, b) => a + b

reduce(add, [1, 2, 3]);
// 6

reduce(add, 10, [1, 2, 3]);
// 16

reduce(add, {a: 1, b: 2, c: 3});
// 6

await reduce(add, [Promise.resolve(1), 2, 3])
// 6
```

### each

### partition
### countBy
### groupBy
### indexBy
### max
### maxBy
### min
### minBy

### sort
### sortBy
### sortDesc
### sortByDesc

### object
### pick
### omit
### values
### keys
### entries
### extend
### defaults
### baseSel
### sel

### take

```javascript
take(1, [1, 2, 3]);
// [1]

take(2, [1, 2, 3])
// [1, 2]
```

### takeWhile
### takeUntil
### takeAll
### drop
### dropWhile
### dropUntil
### dropRight
### head
### tail, rest
### last
### initial

### find
### findWhere

### zip
### unzip
### zipObj
### zipWith

### delay
### promiseAllObject
### promiseAllEntries

### noop
### identity

## Predicates

### some
### every
### match
### isMatch
### isIterable
### isFunction
### isArray
### isString
### isUndefined

## Lazy

### L.range
### L.map
### L.filter
### L.reject
### L.compact
### L.mapEntries
### L.entries
### L.values
### L.keys
### L.indexValues
### L.flat
### L.flatMap
### L.deepFlat
### L.reverse
### L.take
### L.takeWhile
### L.takeUntil
### L.drop
### L.dropWhile
### L.dropUntil
### L.difference
### L.differenceBy
### L.intersection
### L.intersectionBy
### L.union
### L.unionBy
### L.interval


## Concurrency

### C.calls
### C.takeAll
### C.takeRace
### C.race
### C.map
### C.mapEntries
### C.filter
### C.compact
### C.reduce
### C.take
### C.drop
### C.take1
### C.head
### C.tail
### C.find
### C.every
### C.some

## Stoppable

### reduceS, stop

```javascript
reduceS((a, b) => {
 const res = a + b;
 return res > 5 ? stop(res) : res;
}, [1, 2, 3, 4]);
// 6
```

### goS, pipeS, stop, stopIf

```javascript
const f1 = pipeS(
  a => a % 2 ? stop(a) : a,
  a => a + 10);
f1(1); // 1
f1(2); // 12

goS({a: 1, b: 2},
  stopIf({a: 1}),
  ({a, b}) => ({a: a + 10, b})); // {a: 1, b: 2}

goS({a: 2, b: 2},
  stopIf({a: 1}),
  ({a, b}) => ({a: a + 10, b})); // {a: 12, b: 2}

goS({a: 1, b: 2},
  stopIf({a: 1}, null),
  ({a, b}) => ({a: a + 10, b}));
// null
```

## String

### string
### strMap
### join
### html

# Change Log