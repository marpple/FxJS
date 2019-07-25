# API

- [Function](#Function)
  - [apply](#apply)
  - [call](#call)
  - [calls](#calls)
  - [constant](#constant)
  - [curry](#curry)
  - [debounce](#debounce)
  - [go](#go)
  - [negate](#negate)
  - [pipe](#pipe)
  - [tap](#tap)
  - [throttle](#throttle)
- [Strict](#strict)
  - [add](#add)
  - [append](#append)
  - [baseSel](#baseSel)
  - [chunk](#chunk)
  - [compact](#compact)
  - [countBy](#countBy)
  - [deepFlat](#deepFlat)
  - [defaults](#defaults)
  - [defaultTo](#defaultTo)
  - [delay](#delay)
  - [difference](#difference)
  - [differenceBy](#differenceBy)
  - [differenceWith](#differenceWith)
  - [drop](#drop)
  - [dropRight](#dropRight)
  - [dropUntil](#dropUntil)
  - [dropWhile](#dropWhile)
  - [each](#each)
  - [entries](#entries)
  - [extend](#extend)
  - [filter](#filter)
  - [find](#find)
  - [findWhere](#findWhere)
  - [flat](#flat)
  - [flatMap](#flatMap)
  - [groupBy](#groupBy)
  - [head](#head)
  - [identity](#identity)
  - [indexBy](#indexBy)
  - [initial](#initial)
  - [intersection](#intersection)
  - [intersectionBy](#intersectionBy)
  - [intersectionWith](#intersectionWith)
  - [join](#join)
  - [keys](#keys)
  - [last](#last)
  - [map](#map)
  - [mapEntries](#mapEntries)
  - [mapObject](#mapObject)
  - [max](#max)
  - [maxBy](#maxBy)
  - [min](#min)
  - [minBy](#minBy)
  - [noop](#noop)
  - [object](#object)
  - [omit](#omit)
  - [partition](#partition)
  - [pick](#pick)
  - [pluck](#pluck)
  - [prepend](#prepend)
  - [promiseAllEntries](#promiseAllEntries)
  - [promiseAllObject](#promiseAllObject)
  - [range](#range)
  - [reduce](#reduce)
  - [reject](#reject)
  - [rest](#rest)
  - [sel](#sel)
  - [sort](#sort)
  - [sortBy](#sortBy)
  - [sortByDesc](#sortByDesc)
  - [sortDesc](#sortDesc)
  - [split](#split)
  - [splitEvery](#splitEvery)
  - [tail](#tail)
  - [take](#take)
  - [take1](#take1)
  - [takeAll](#takeAll)
  - [takeUntil](#takeUntil)
  - [takeWhile](#takeWhile)
  - [toIter](#toIter)
  - [union](#union)
  - [unionBy](#unionBy)
  - [unique](#unique)
  - [uniqueBy](#uniqueBy)
  - [unzip](#unzip)
  - [values](#values)
  - [zip](#zip)
  - [zipObj](#zipObj)
  - [zipWith](#zipWith)
- [Predicates](#Predicates)
  - [every](#every)
  - [has](#has)
  - [isArray](#isArray)
  - [isFunction](#isFunction)
  - [isIterable](#isIterable)
  - [isMatch](#isMatch)
  - [isString](#isString)
  - [isUndefined](#isUndefined)
  - [match](#match)
  - [some](#some)
- [Lazy](#lazy)
  - [L.append](#L.append)
  - [L.chunk](#L.chunk)
  - [L.compact](#L.compact)
  - [L.concat](#L.concat)
  - [L.constant](#L.constant)
  - [L.deepFlat](#L.deepFlat)
  - [L.difference](#L.difference)
  - [L.differenceBy](#L.differenceBy)
  - [L.differenceWith](#L.differenceWith)
  - [L.drop](#L.drop)
  - [L.dropUntil](#L.dropUntil)
  - [L.dropWhile](#L.dropWhile)
  - [L.empty](#L.empty)
  - [L.entries](#L.entries)
  - [L.filter](#L.filter)
  - [L.flat](#L.flat)
  - [L.flatMap](#L.flatMap)
  - [L.zipIndexs](#L.zipIndexs)
  - [L.intersection](#L.intersection)
  - [L.intersectionBy](#L.intersectionBy)
  - [L.intersectionWith](#L.intersectionWith)
  - [L.interval](#L.interval)
  - [L.keys](#L.keys)
  - [L.map](#L.map)
  - [L.mapEntries](#L.mapEntries)
  - [L.range](#L.range)
  - [L.reject](#L.reject)
  - [L.reverse](#L.reverse)
  - [L.splitEvery](#L.splitEvery)
  - [L.take](#L.take)
  - [L.takeUntil](#L.takeUntil)
  - [L.takeWhile](#L.takeWhile)
  - [L.union](#L.union)
  - [L.unionBy](#L.unionBy)
  - [L.unique](#L.unique)
  - [L.uniqueBy](#L.uniqueBy)
  - [L.values](#L.values)
  - [L.zip](#L.zip)
- [Concurrency](#concurrency)
  - [C.calls](#C.calls)
  - [C.compact](#C.compact)
  - [C.drop](#C.drop)
  - [C.every](#C.every)
  - [C.filter](#C.filter)
  - [C.find](#C.find)
  - [C.head](#C.head)
  - [C.map](#C.map)
  - [C.mapEntries](#C.mapEntries)
  - [C.object](#C.object)
  - [C.race](#C.race)
  - [C.reduce](#C.reduce)
  - [C.some](#C.some)
  - [C.tail](#C.tail)
  - [C.take](#C.take)
  - [C.take1](#C.take1)
  - [C.takeAll](#C.takeAll)
  - [C.takeRace](#C.takeRace)
- [Stoppable](#stoppable)
  - [reduceS, stop](#reduces-stop)
  - [goS, pipeS, stop, stopIf](#gos-pipes-stop-stopif)
- [String](#String)
  - [html](#html)
  - [join](#join)
  - [strMap](#strMap)
  - [string](#string)

## Function
### apply
- `(f, iterable) => f(...iterable)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/apply.js)


### call
- `(f, ...args) => f(...args)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/call.js)


### calls
- `([(a, b) => c, (a, b) => d, ...], a, b) => [c, d, ...]`
- `([(a, b) => Promise c, (a, b) => Promise d, ...], a, b) => Promise [c, d]`
- `({ k: (a, b) => c, k2: (a, b) => d }, a, b) => { k: c, k2: d }`
- `({ k: (a, b) => Promise c, k2: (a, b) => Promise d }, a, b) => Promise { k: c, k2: d }`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/calls.js)

```javascript
calls([
  a => a + 1,
  a => a + 2
], 10);
// [11, 12]

calls({
  a: a => a + 1,
  b: a => a + 2
}, 10);
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


### constant
- `a => _ => a`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/constant.js)

```javascript
const a = constant('A');
a(); // A
a(); // A
```


### curry
- `((a, b, ...) => e) => a => (b, ...) => e`
- `((a, b, ...) => e) => (a, b, ...) => e`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/curry.js)

```javascript
const add = curry((a, b) => a + b);

const add10 = add(10);
add10(5); // 15
add10(6); // 16

add(10, 5); // 15
```


### debounce


### go
- `(a, a => b, b => c, ..., y => z) => z`
- `(Promise a, a => b, b => c, ..., y => z) => Promise z`
- `(a, a => Promise b, b => Promise c, ..., y => z) => Promise z`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/go.js)

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


### negate
- `f => a => !f(a)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/negate.js)

```javascript
const a = negate(a => a);
log(a(true)); // false
log(a(false)); // true
```


### pipe
- `((a, b, ...) => d, d => e, ..., y => z) => (a, b, ...) => z`
- `((a, b, ...) => Promise d, d => e, e => Promise f, ..., y => z) => (a, b, ...) => Promise z`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pipe.js)

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


### tap
- `(g, f, ...) => a => go(a, g, f, ..., _ => a)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/tap.js)

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


### throttle


## Strict

### add
- Number => Number => Number
- [source](https://github.com/marpple/FxJS/blob/master/Strict/add.js)

```javascript
add(10, 5);
// 15

add(10)(5);
// 15
```


### append


### baseSel


### chunk


### compact
- `Iterable a => [a]`
- `Iterable Promise a => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/compact.js)

```javascript
compact([1, 2, 0, false, true, null]);
// [1, 2, true]
```


### countBy
- (a => b) => Iterable a => { [b]: n }
- (a => b) => Iterable Promise a => Promise { [b]: n }
- (a => Promise b) => Iterable a => Promise { [b]: n }
- (a => Promise b) => Iterable Promise a => Promise { [b]: n }
- [source](https://github.com/marpple/FxJS/blob/master/Strict/countBy.js)

```javascript
countBy(a => a % 2 ? 'odd' : 'even', [1, 2, 3, 4, 5]);
// { odd: 3, even: 2 }
```


### deepFlat
- [[[[a]]]] => [a]
- Iterable Iterable Iterable ... Iterable a => [a]
- [Promise [[Promise a]]] => Promise [a]
- [Promise [[Iterable Promise a]]] => Promise [a]
- [source](https://github.com/marpple/FxJS/blob/master/Strict/deepFlat.js)

```javascript
deepFlat([[1, 2, [3, [4, 5, [6], [[7]]]]]]);
// [1, 2, 3, 4, 5, 6, 7];
```


### defaults
- ({}, {}, ..., {}) => {}
- [source](https://github.com/marpple/FxJS/blob/master/Strict/defaults.js)

```javascript
defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// {flavor: "chocolate", sprinkles: "lots"}
```


### defaultTo


### delay
- time => a => a
- [source](https://github.com/marpple/FxJS/blob/master/Strict/delay.js)

```javascript
go(
  'hi',
  delay(1000),
  log); // After 1 second "hi"
```


### difference


### differenceBy


### differenceWith


### drop


### dropRight


### dropUntil


### dropWhile


### each
- (a => b) => Iterable a => [a]
- (a => b) => Iterable Promise a => Promise [a]
- (a => Promise b) => Iterable a => Promise [a]
- (a => Promise b) => Iterable Promise a => Promise [a]
- [source](https://github.com/marpple/FxJS/blob/master/Strict/each.js)

```javascript
go(
  document.querySelectorAll('.post'),
  each(el => el.innerHTML = ''),
  log); // [div.post, div.post, div.post];
```


### entries
- { k: v } => [[k, v]]
- [source](https://github.com/marpple/FxJS/blob/master/Strict/entries.js)

```javascript
entries({a: 1, b: 2, c: 3});
// [['a', 1], ['b', 2], ['c', 3]]
```


### extend
- ({}, {}, ..., {}) => {}
- [source](https://github.com/marpple/FxJS/blob/master/Strict/extend.js)

```javascript
extend({flavor: "vanilla", sprinkles: "lots"}, {flavor: "chocolate"});
// {flavor: "chocolate", sprinkles: "lots"}
```


### filter
- `(a => Boolean) => Iterable a => [a]`
- `(a => Boolean) => Iterable Promise a => Promise [a]`
- `(a => Promise Boolean) => Iterable a => Promise [a]`
- `(a => Promise Boolean) => Iterable Promise a => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/filter.js)

```javascript
filter(a => a % 2, [1, 2, 3]);
// [1, 3]

filter(a => a % 2, [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(log);
// [1, 3]

filter(
  a => Promise.resolve(a % 2),
  [1, 2, 3]
).then(log);
// [1, 3]

filter(a => Promise.resolve(a % 2), [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(log);
// [1, 3]
```


### find
- find = head . L.filter
- (a => Boolean) => Iterable a => a
- (a => Promise Boolean) => Iterable a => Promise a
- (a => Boolean) => Iterable Promise a => Promise a
- (a => Promise Boolean) => Iterable Promise a => Promise a
- [source](https://github.com/marpple/FxJS/blob/master/Strict/find.js)

```javascript
find(a => a > 3, [1, 2, 3, 4, 5]);
// 4

find(({age}) => age == 23, [
  { name: 'a', age: 15, ... },
  { name: 'b', age: 19, ... },
  { name: 'c', age: 23, ... },
  { name: 'd', age: 17, ... },
  { name: 'e', age: 23, ... }
]);
// { name: 'c', age: 23, ... }
```


### findWhere
- {k: v} => Iterable {k: v} => {k: v}
- {k: v} => Iterable Promise {k: v} => Promise {k: v}
- [source](https://github.com/marpple/FxJS/blob/master/Strict/findWhere.js)

```javascript
findWhere({ age: 23 }, [
  { name: 'a', age: 15, ... },
  { name: 'b', age: 19, ... },
  { name: 'c', age: 23, ... },
  { name: 'd', age: 17, ... },
  { name: 'e', age: 23, ... }
]);
// { name: 'c', age: 23, ... }

findWhere({ name: 'e', age: 23 }, [
  { name: 'a', age: 15, ... },
  { name: 'b', age: 19, ... },
  { name: 'c', age: 23, ... },
  { name: 'd', age: 17, ... },
  { name: 'e', age: 23, ... }
]);
// { name: 'e', age: 23, ... }
```

### flat
- (Iterable Iterable a, Number depth) => [a]
- (Iterable Promise Iterable a, Number depth) => Promise [a]
- (Iterable Iterable Promise a, Number depth) => Promise [a]
- [source](https://github.com/marpple/FxJS/blob/master/Strict/flat.js)

```javascript
flat([[1, 2], [3, 4]]);
// [1, 2, 3, 4]

flat([[1, [2]], [[[3]]]);
// [1, [2], [[3]]];

flat([[1, [2]], [[[3]]], 2);
// [1, 2, [3]];

flat([[1, [2]], [[[3]]], 3);
// [1, 2, 3];

await flat([Promise.resolve([1, 2]), [Promise.resolve(3), 4]]);
// [1, 2, 3, 4]
```


### flatMap
- flatMap = flat . mapLazy
- (a => Iterable b) => Iterable a => [b]
- (a => Iterable b) => Iterable Promise a => Promise [b]
- (a => Iterable Promise b) => Iterable a => Promise [b]
- (a => Promise Iterable b) => Iterable Promise a => Promise [b]
- (a => Promise Iterable Promise b) => Iterable a => Promise [b]
- (a => Promise Iterable Promise b) => Iterable Promise a => Promise [b]
- [source](https://github.com/marpple/FxJS/blob/master/Strict/flatMap.js)

```javascript
flatMap(a => range(a), [1, 2]);
// [0, 0, 1]

await flatMap(a => Promise.resolve(range(a)), [1, 2]);
// [0, 0, 1]
```

### groupBy


### head


### identity


### indexBy


### initial


### intersection


### intersectionBy


### intersectionWith


### join


### keys


### last


### map
- `(a => b) => Iterable a => [b]`
- `(a => b) => Iterable Promise a => Promise [b]`
- `(a => Promise b) => Iterable a => Promise [b]`
- `(a => Promise b) => Iterable Promise a => Promise [b]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/map.js)

```javascript
map(a => a + 10, [1, 2, 3]);
// [11, 12, 13]

map(a => Promise.resolve(a + 10), [1, 2, 3]).then(log);
// [11, 12, 13]

map(a => a.nodeName, document.querySelectorAll('head *'));
// ["META", "TITLE", "SCRIPT"]

map(a => a + 10, function* () {
  yield 4;
  yield 5;
} ());
// [14, 15]
```


### mapEntries
- `(a => b) => Iterable [k, a] => [[k, b]]`
- `(a => b) => Iterable [k, Promise a] => Promise [[k, b]]`
- `(a => Promise b) => Iterable [k, a] => Promise [[k, b]]`
- `(a => Promise b) => Iterable [k, Promise a] => Promise [[k, b]]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/mapEntries.js)

```javascript
mapEntries(a => a + 10, [['a', 1], ['b', 2]]);
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
- `(a => b) => { k: Promise a } => Promise { k: b }`
- `(a => Promise b) => { k: a } => Promise { k: b }`
- `(a => Promise b) => { k: Promise a } => Promise { k: b }`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/mapObject.js)

```javascript
mapObject(a => a + 10, { a: 1, b: 2 });
// { a: 11, b: 12 }

mapObject(a => Promise.resolve(a + 10), { a: 1, b: 2 }).then(log);
// { a: 11, b: 12 }

go(
  { a: 1, b: 2 },
  mapObject(a => Promise.resolve(a + 10)),
  log);
  // { a: 11, b: 12 }
```


### max
### maxBy
### min
### minBy
### noop
### object
### omit
### partition
### pick


### pluck
- `String k => Iterable a => [a[k]]`
- `String k => Iterable Promise a => Promise [a[k]]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pluck.js)

```javascript
pluck('id', [{ id: 1 }, { id: 3 }]);
// [1, 3]
```


### prepend
### promiseAllEntries
### promiseAllObject


### range
- `([start=0], end, [step=1]) => [Number a, ...]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/range.js)

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


### reduce
- `((a, b) => c) => Iterable a => c`
- `((a, b) => Promise c) => Iterable a => Promise c`
- `((a, b) => c) => Iterable Promise a => Promise c`
- `((acc, b) => acc) => acc => Iterable b => acc`
- `((acc, b) => Promise acc) => acc => Iterable b => Promise acc`
- `((acc, b) => acc) => acc => Iterable Promise b => Promise acc`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/reduce.js)

```javascript
const add = (a, b) => a + b

reduce(add, [1, 2, 3]);
// 6

reduce(add, 10, [1, 2, 3]);
// 16

await reduce(add, [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
])
// 6
```


### reject
- `(a => Boolean) => Iterable a => []`
- `(a => Boolean) => Iterable Promise a => Promise []`
- `(a => Promise Boolean) => Iterable a => Promise []`
- `(a => Promise Boolean) => Iterable Promise a => Promise []`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/reject.js)

```javascript
reject(a => a % 2, [1, 2, 3]);
// [2]

reject(a => a % 2, [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(log);
// [2]

reject(
  a => Promise.resolve(a % 2),
  [1, 2, 3]
).then(log);
// [2]

reject(a => Promise.resolve(a % 2), [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(log);
// [2]
```


### sel
### sort
### sortBy
### sortByDesc
### sortDesc
### split
### splitEvery
### tail (rest)
### take
### take1
### takeAll
### takeUntil
### takeWhile
### toIter
### union
### unionBy


### unique
- `Iterable a => [a]`
- `Iterable a => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/unique.js)

```javascript
unique([1, 2, 3, 1, 2, 4]);
// [1, 2, 3, 4]
```


### uniqueBy
- `(a => b) => Iterable a => [a]`
- `(a => b) => Iterable Promise a => Promise [a]`
- `(a => Promise b) => Iterable a => Promise [a]`
- `(a => Promise b) => Iterable Promise a => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/uniqueBy.js)

```javascript
const users = [
  {name: 'aa'},
  {name: 'Aa'},
  {name: 'bb'},
  {name: 'cc'},
  {name: 'bb'}
];

uniqueBy(u => u.name.toUpperCase(), users);
// [{name: 'aa'}, {name: 'bb'}, {name: 'cc'}]
```


### unzip
### values
### zip
### zipObj
### zipWith



## Predicates
### every
### has
### isArray
### isFunction
### isIterable
### isMatch
### isString
### isUndefined
### match
### some



## Lazy
### L.append
### L.chunk
### L.compact
### L.concat
### L.constant
### L.deepFlat
### L.difference
### L.differenceBy
### L.differenceWith
### L.drop
### L.dropUntil
### L.dropWhile
### L.empty
### L.entries


### L.filter
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/filter.js)

```javascript
const iterator = L.filter(a => a % 2, [1, 2, 3]);
iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 3, done: false }
iterator.next(); // { value: undefined, done: true }

go(
  L.range(1, Infinity),
  L.filter(a => a % 2),
  take(2));
// [1, 3]

await go(
  L.range(Infinity),
  L.map(a => Promise.resolve(a)),
  L.filter(a => a % 2),
  take(2));
// [1, 3]
```


### L.flat
### L.flatMap
### L.zipIndexs
### L.intersection
### L.intersectionBy
### L.intersectionWith
### L.interval
### L.keys
### L.map
### L.mapEntries
### L.range
### L.reject
### L.reverse
### L.splitEvery
### L.take
### L.takeUntil
### L.takeWhile
### L.union
### L.unionBy
### L.unique
### L.uniqueBy
### L.values
### L.zip



## Concurrency
### C.calls
### C.compact
### C.drop
### C.every
### C.filter
### C.find
### C.head
### C.map
### C.mapEntries
### C.object
### C.race
### C.reduce
### C.some
### C.tail
### C.take
### C.take1
### C.takeAll
### C.takeRace



## Stoppable
### reduceS stop
### goS pipeS stop stopIf



## String
### html
### join
### strMap
### string