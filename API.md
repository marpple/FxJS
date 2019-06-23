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
  - [throttle](#throttle)
  - [debounce](#debounce)
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
- `(a, a => b, b => c, ..., y => z) => z`
- `(Promise a, a => b, b => c, ..., y => z) => Promise z`
- `(a, a => Promise b, b => Promise c, ..., y => z) => Promise z`
- [source](https://github.com/marpple/FxJS/blob/master/go.js)

```javascript
go(0,
  a => a + 1,
  a => a + 10,
  log); // 11

go(0,
  a => Promise.resolve(a + 1),
  a => a + 10,
  log); // 11

const b = go(0,
  a => a + 1,
  a => a + 10);
log(b); // 11

const pb = go(0,
  a => Promise.resolve(a + 1),
  a => a + 10);
pb.then(log); // 11
```

### pipe

- `((a, b, ...) => e, e => f, f => g, ..., y => z) => (a, b, ...) => z`
- `((a, b, ...) => Promise e, e => f, f => Promise g, ..., y => z) => Promise z`
- [source](https://github.com/marpple/FxJS/blob/master/pipe.js)

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
  // 186

go(
  fetchProducts(),
  total(({price}) => price),
  log);
  // 156000
```

### curry

- `(a, b, ...) => e => a => (b, ...) => e`
- `(a, b, ...) => e => (a, b, ...) => e`
- [source](https://github.com/marpple/FxJS/blob/master/curry.js)

```javascript
const add = curry((a, b) => a + b);

const add10 = add(10);
add10(5); // 15
add10(6); // 16

add(10, 5); // 15
```

### tap

- `(g, f) => a => (f(g(a), a)`
- [source](https://github.com/marpple/FxJS/blob/master/tap.js)

```javascript
go(
  10,
  a => a + 5,
  tap(
    a => a + 5,
    log), // 20
  a => a + 10,
  log); // 25
```

### constant

- `a => _ => a`
- [source](https://github.com/marpple/FxJS/blob/master/constant.js)

```javascript
const a = constant('A');
a(); // A
a(); // A
```

### negate

- `f => a => !f(a)`
- [source](https://github.com/marpple/FxJS/blob/master/negate.js)

```javascript
const a = negate(a => a);
log(a(true)); // false
log(a(false)); // true
```

### call

- `(f, ...args) => f(...args)`
- [source](https://github.com/marpple/FxJS/blob/master/call.js)

### apply

- `(f, iterable) => f(...iterable)`
- [source](https://github.com/marpple/FxJS/blob/master/apply.js)

### calls

- `([(a, b) => c, (a, b) => d, ...], a, b) => [c, d, ...]`
- `([(a, b) => Promise c, (a, b) => Promise d, ...], a, b) => Promise [c, d]`
- `({ k: (a, b) => c, k2: (a, b) => d }, a, b) => { k: c, k2: d }`
- `({ k: (a, b) => Promise c, k2: (a, b) => Promise d }, a, b) => Promise { k: c, k2: d }`
- [source](https://github.com/marpple/FxJS/blob/master/calls.js)

```javascript
log(calls([
  a => a + 1,
  a => a + 2
], 10));
// [11, 12]

log(calls({
  a: a => a + 1,
  b: a => a + 2
}, 10));
// {a: 11, b: 12}

calls([
  _ => Promise.resolve(1),
  _ => Promise.resolve(2),
  _ => Promise.resolve(3)
]).then(log);
// [1, 2, 3]

calls({
  a: _ => Promise.resolve(1),
  b: _ => Promise.resolve(2),
  c: _ => Promise.resolve(3)
}).then(log);
// {a: 1, b: 2, c: 3}
```

### throttle
### debounce

## Strict

### range

- `([start=0], end, [step=1]) => [Number a, ...]`
- [source](https://github.com/marpple/FxJS/blob/master/range.js)

```javascript
range(4);
// => [0, 1, 2, 3]

range(-4);
// => [0, -1, -2, -3]

range(1, 5);
// => [1, 2, 3, 4]

range(0, 20, 5);
// => [0, 5, 10, 15]

range(0, -4, -1);
// => [0, -1, -2, -3]
```

### map

- `(a => b) => Iterable a => [b]`
- `(a => Promise b) => Iterable a => Promise [b]`
- [source](https://github.com/marpple/FxJS/blob/master/map.js)

```javascript
log(map(a => a + 10, [1, 2, 3]));
// [11, 12, 13]

map(a => Promise.resolve(a + 10), [1, 2, 3]).then(log);
// [11, 12, 13]

log(map(a => a.nodeName, document.querySelectorAll('head *')));
// ["META", "TITLE", "SCRIPT"]

log(map(a => a + 10, function* () {
  yield 4;
  yield 5;
} ()));
// [14, 15]
```

### mapEntries

- `(a => b) => Iterable [k, a] => [[k, b]]`
- `(a => Promise b) => Iterable [k, a] => Promise [k, b]`
- [source](https://github.com/marpple/FxJS/blob/master/mapEntries.js)

```javascript
log(mapEntries(a => a + 10, [['a', 1], ['b', 2]]));
// [['a', 11], ['b', 12]]

mapEntries(a => Promise.resolve(a + 10), [['a', 1], ['b', 2]]).then(log);
// [['a', 11], ['b', 12]]

// entries == Object.entries
// object == Object.fromEntries
object(mapEntries(a => a + 10, entries({ a: 1, b: 2})));
// { a: 11, b: 12 }

go({ a: 1, b: 2},
  entries,
  mapEntries(a => Promise.resolve(a + 10)),
  object
).then(log);
// { a: 11, b: 12 }
```

### mapObject

- `(a => b) => { k: a } => { k: b }`
- `(a => Promise b) => { k: a } => Promise { k: b }`
- [source](https://github.com/marpple/FxJS/blob/master/mapObject.js)

```javascript
log(mapObject(a => a + 10, { a: 1, b: 2 }));
// { a: 11, b: 12 }

mapObject(a => Promise.resolve(a + 10), { a: 1, b: 2 }).then(log);
// { a: 11, b: 12 }

go(
  { a: 1, b: 2 },
  mapObject(a => Promise.resolve(a + 10)),
  log);
  // { a: 11, b: 12 }
```

### pluck

- `String k => Iterable a => [a[k]]`
- [source](https://github.com/marpple/FxJS/blob/master/pluck.js)

```javascript
log(map('id', [{ id: 1 }, { id: 3 }]));
// [1, 3]
```

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
### throttle
### debounce


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