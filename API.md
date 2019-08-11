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
  - [sel](#sel)
  - [sort](#sort)
  - [sortBy](#sortBy)
  - [sortByDesc](#sortByDesc)
  - [sortDesc](#sortDesc)
  - [split](#split)
  - [splitEvery](#splitEvery)
  - [sum](#sum)
  - [sumBy](#sumBy)
  - [tail](#tail-rest)
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
  - [equals](#equals)
  - [equals2](#equals2)
  - [equalsBy](#equalsBy)
  - [equalsBy2](#equalsBy2)
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
  - [goS, pipeS, stop, stopIf](#gos,-pipes,-stop,-stopif)
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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/debounce.js)


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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/throttle.js)


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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/append.js)

### baseSel
- [source](https://github.com/marpple/FxJS/blob/master/Strict/baseSel.js)

```javascript
const sel = baseSel('.');
sel('a.b', { a: { b: 10 }});
// 10

sel('a.b', { b: { c: 20 }});
// undefined

const sel2 = baseSel('>');
sel2('a>b', { a: { b: 10 }});
// 10

sel2('a>b', { b: { c: 20 }});
// undefined
```


### chunk
- [source](https://github.com/marpple/FxJS/blob/master/Strict/chunk.js)

```javascript
chunk(2, [1, 2, 3, 4, 5]);
// [[1, 2], [3, 4], [5]]
```


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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/defaultTo.js)

```javascript
const obj = {a: 1, c: null, d: NaN};
defaultTo(0, obj.a);
// 1
defaultTo(0, obj.b);
// 0
defaultTo(0, obj.c);
// 0
defaultTo(0, obj.d);
// 0
```


### delay
- time => a => Promise a
- (time, a) => Promise a
- [source](https://github.com/marpple/FxJS/blob/master/Strict/delay.js)

```javascript
go(
  'hi',
  delay(1000),
  log); // After 1 second "hi"
```


### difference
- [source](https://github.com/marpple/FxJS/blob/master/Strict/difference.js)
```javascript
difference([2, 3], [2, 1]);
// [1]
difference([2, 2, 2, 2], [1, 1, 1, 1, 1]);
// [1, 1, 1, 1, 1]
difference([1, 2, 3, 4], [1]);
// []
difference([2], [1, 2, 3, 4]);
// [1, 3, 4]
```

### differenceBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/differenceBy.js)
```javascript
differenceBy(a => a.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }]);
// [{ x: 2 }]
```

### differenceWith
- [source](https://github.com/marpple/FxJS/blob/master/Strict/differenceWith.js)
```javascript
const cmp = (x, y) => x.a === y.a;
const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}];
const l2 = [{a: 3}, {a: 4}];
differenceWith(cmp, l1, l2);
// [{a: 1}, {a: 2}, {a: 5}]
```

### drop
- [source](https://github.com/marpple/FxJS/blob/master/Strict/drop.js)

```javascript
drop([1, 2, 3, 4]);
// [2, 3, 4]
```

### dropRight
- [source](https://github.com/marpple/FxJS/blob/master/Strict/dropRight.js)

```javascript
dropRight([1, 2, 3, 4]);
// [1, 2, 3]
```


### dropUntil
- [source](https://github.com/marpple/FxJS/blob/master/Strict/dropUntil.js)

```javascript
dropUntil(a => a > 1, [1, 2, 3, 4]);
// [3, 4]
```


### dropWhile
- [source](https://github.com/marpple/FxJS/blob/master/Strict/dropWhile.js)

```javascript
dropWhile(a => a < 3, [1, 2, 3, 4]);
// [3, 4]
```


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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/groupBy.js)

```javascript
groupBy(a => a % 2 ? 'odd' : 'even', [1, 2, 3, 4, 5]);
// { odd: [1, 3, 5], even: [2, 4] }
```


### head
- [source](https://github.com/marpple/FxJS/blob/master/Strict/head.js)

```javascript
head([1, 2, 3, 4]);
// 1
```


### identity
- [source](https://github.com/marpple/FxJS/blob/master/Strict/identity.js)

```javascript
const identity = a => a;
```


### indexBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/indexBy.js)
```javascript
const products = [{id: 1, price: 100}, {id: 3, price: 100}, {id: 5, price: 100}];
indexBy(p => p.id, products);
// {1: {id: 1, price: 100}, 3: {id: 3, price: 100}, 5: {id: 5, price: 100}}
```

### initial
- initial == dropRight
- [source](https://github.com/marpple/FxJS/blob/master/Strict/initial.js)
```javascript
initial([1, 2, 3]);
// [1, 2]
```

### intersection
- [source](https://github.com/marpple/FxJS/blob/master/Strict/intersection.js)
```javascript
intersection([2, 1], [2, 3]);
// [2]
intersection([1, 2, 1, 1, 3], [1, 1, 1, 2, 4]);
// [1, 2]
```

### intersectionBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/intersectionBy.js)
```javascript
intersectionBy(o => o.x, [{ x: 2 }, { x: 1 }], [{ x: 1 }]);
// [{ x: 1 }]
```


### intersectionWith
- [source](https://github.com/marpple/FxJS/blob/master/Strict/intersectionWith.js)
```javascript
const cmp = (x, y) => x.a === y.a;
const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}];
const l2 = [{a: 3}, {a: 4}];
intersectionWith(cmp, l1, l2);
// [{a: 3}, {a: 4}]
```


### keys
- [source](https://github.com/marpple/FxJS/blob/master/Strict/keys.js)
```javascript
keys({a: 1, b: 2, c: 3});
// ['a', 'b', 'c']
```

### last
- [source](https://github.com/marpple/FxJS/blob/master/Strict/last.js)
```javascript
last([1, 2, 3]);
// 3
```

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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/max.js)
```javascript
max([1, 3, 7, 4]);
// 7
```

### maxBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/maxBy.js)
```javascript
maxBy(a => a * -1, [1, 3, 7, 4]);
// 1
```

### min
- [source](https://github.com/marpple/FxJS/blob/master/Strict/min.js)
```javascript
min([1, 3, 7, 4]);
// 1
```

### minBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/minBy.js)
```javascript
minBy(a => a * -1, [1, 3, 7, 4]);
// 7
```

### noop
- [source](https://github.com/marpple/FxJS/blob/master/Strict/noop.js)
```javascript
function noop() {}
```

### object
- [source](https://github.com/marpple/FxJS/blob/master/Strict/object.js)
```javascript
object([['a', 1], ['b', 2], ['c', 3]]);
// {a: 1, b: 2, c: 3}
```

### omit
- [source](https://github.com/marpple/FxJS/blob/master/Strict/omit.js)
```javascript
omit(['a, c'], {a: 1, b: 2, c: 3, d: 4});
// {b: 2, d: 4}
```

### partition
- [source](https://github.com/marpple/FxJS/blob/master/Strict/partition.js)
```javascript
partition(a => a % 2, [1, 2, 3, 4, 5]);
// [[1, 3, 5], [2, 4]]
```

### pick
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pick.js)
```javascript
pick(['a, c'], {a: 1, b: 2, c: 3, d: 4});
// {a: 1, c: 3}
```


### pluck
- `String k => Iterable a => [a[k]]`
- `String k => Iterable Promise a => Promise [a[k]]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pluck.js)

```javascript
pluck('id', [{ id: 1 }, { id: 3 }]);
// [1, 3]
```


### prepend
- [source](https://github.com/marpple/FxJS/blob/master/Strict/prepend.js)


### promiseAllEntries
- [source](https://github.com/marpple/FxJS/blob/master/Strict/promiseAllEntries.js)

### promiseAllObject
- [source](https://github.com/marpple/FxJS/blob/master/Strict/promiseAllObject.js)


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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/sel.js)

### sort
- [source](https://github.com/marpple/FxJS/blob/master/Strict/sort.js)

### sortBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/sortBy.js)

### sortByDesc
- [source](https://github.com/marpple/FxJS/blob/master/Strict/sortByDesc.js)

### sortDesc
- [source](https://github.com/marpple/FxJS/blob/master/Strict/sortDesc.js)

### split
- [source](https://github.com/marpple/FxJS/blob/master/Strict/split.js)

### splitEvery
- [source](https://github.com/marpple/FxJS/blob/master/Strict/splitEvery.js)

### sum
- [source](https://github.com/marpple/FxJS/blob/master/Strict/sum.js)

### sumBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/sumBy.js)

### tail (rest)
- [source](https://github.com/marpple/FxJS/blob/master/Strict/tail (rest).js)

### take
- [source](https://github.com/marpple/FxJS/blob/master/Strict/take.js)

### take1
- [source](https://github.com/marpple/FxJS/blob/master/Strict/take1.js)

### takeAll
- [source](https://github.com/marpple/FxJS/blob/master/Strict/takeAll.js)

### takeUntil
- [source](https://github.com/marpple/FxJS/blob/master/Strict/takeUntil.js)

### takeWhile
- [source](https://github.com/marpple/FxJS/blob/master/Strict/takeWhile.js)

### toIter
- [source](https://github.com/marpple/FxJS/blob/master/Strict/toIter.js)

### union
- [source](https://github.com/marpple/FxJS/blob/master/Strict/union.js)

### unionBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/unionBy.js)


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
- [source](https://github.com/marpple/FxJS/blob/master/Strict/unzip.js)

### values
- [source](https://github.com/marpple/FxJS/blob/master/Strict/values.js)

### zip
- [source](https://github.com/marpple/FxJS/blob/master/Strict/zip.js)

### zipObj
- [source](https://github.com/marpple/FxJS/blob/master/Strict/zipObj.js)

### zipWith
- [source](https://github.com/marpple/FxJS/blob/master/Strict/zipWith.js)


## Predicates
### equals
- [source](https://github.com/marpple/FxJS/blob/master/Strict/equals.js)

### equals2
- [source](https://github.com/marpple/FxJS/blob/master/Strict/equals2.js)

### equalsBy
- [source](https://github.com/marpple/FxJS/blob/master/Strict/equalsBy.js)

### equalsBy2
- [source](https://github.com/marpple/FxJS/blob/master/Strict/equalsBy2.js)

### every
- [source](https://github.com/marpple/FxJS/blob/master/Strict/every.js)

### has
- [source](https://github.com/marpple/FxJS/blob/master/Strict/has.js)

### isArray
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isArray.js)

### isFunction
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isFunction.js)

### isIterable
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isIterable.js)

### isMatch
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isMatch.js)

### isString
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isString.js)

### isUndefined
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isUndefined.js)

### match
- [source](https://github.com/marpple/FxJS/blob/master/Strict/match.js)

### some
- [source](https://github.com/marpple/FxJS/blob/master/Strict/some.js)




## Lazy

### L.append
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/appendLazy.js)

### L.chunk
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/chunkLazy.js)

### L.compact
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/compactLazy.js)

### L.concat
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/concatLazy.js)

### L.constant
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/constantLazy.js)

### L.deepFlat
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/deepFlatLazy.js)

### L.difference
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/differenceLazy.js)

### L.differenceBy
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/differenceByLazy.js)

### L.differenceWith
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/differenceWithLazy.js)

### L.drop
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/dropLazy.js)

### L.dropUntil
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/dropUntilLazy.js)

### L.dropWhile
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/dropWhileLazy.js)

### L.empty
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/emptyLazy.js)

### L.entries
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/entriesLazy.js)


### L.filter
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/filterLazy.js)

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
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/flatLazy.js)

### L.flatMap
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/flatMapLazy.js)

### L.intersection
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intersectionLazy.js)

### L.intersectionBy
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intersectionByLazy.js)

### L.intersectionWith
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intersectionWithLazy.js)

### L.interval
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intervalLazy.js)

### L.keys
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/keysLazy.js)

### L.map
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/mapLazy.js)

### L.mapEntries
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/mapEntriesLazy.js)

### L.range
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/rangeLazy.js)

### L.reject
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/rejectLazy.js)

### L.reverse
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/reverseLazy.js)

### L.splitEvery
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/splitEveryLazy.js)

### L.takeAllC
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/takeAllLazyC.js)

### L.take
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/takeLazy.js)

### L.takeUntil
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/takeUntilLazy.js)

### L.takeWhile
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/takeWhileLazy.js)

### L.union
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/unionLazy.js)

### L.unionBy
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/unionByLazy.js)

### L.unique
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/uniqueLazy.js)

### L.uniqueBy
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/uniqueByLazy.js)

### L.values
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/valuesLazy.js)

### L.zipIndexs
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/zipIndexsLazy.js)

### L.zip
- [source](https://github.com/marpple/FxJS/blob/master/Lazy/zipLazy.js)


## Concurrency

### C.calls
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/callsC.js)

### C.compact
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/compactC.js)

### C.drop
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/dropC.js)

### C.every
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/everyC.js)

### C.filter
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/filterC.js)

### C.find
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/findC.js)

### C.head
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/headC.js)

### C.map
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/mapC.js)

### C.mapEntries
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/mapEntriesC.js)

### C.object
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/objectC.js)

### C.race
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/raceC.js)

### C.reduce
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/reduceC.js)

### C.some
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/someC.js)

### C.tail
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/tailC.js)

### C.take
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/takeC.js)

### C.take1
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/take1C.js)

### C.takeAll
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/takeAllC.js)

### C.takeRace
- [source](https://github.com/marpple/FxJS/blob/master/Concurrency/takeRaceC.js)




## Stoppable

### reduceS stop
- [source](https://github.com/marpple/FxJS/blob/master/Strict/reduceS.js)

```javascript
reduceS((a, b) => {
 const res = a + b;
 return res > 5  ? stop(res) : res;
}, [1, 2, 3, 4]);
// 6
```

### goS, pipeS, stop, stopIf
- [source](https://github.com/marpple/FxJS/blob/master/Strict/goS.js)
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pipeS.js)
- [source](https://github.com/marpple/FxJS/blob/master/Strict/stop.js)
- [source](https://github.com/marpple/FxJS/blob/master/Strict/stopIf.js)

```javascript
const f1 = pipeS(a => a % 2 ? stop(a) : a, a => a + 10);
f1(1);
// 1
f1(2);
// 12

const f2 = pipeS(stopIf(a => a % 2), a => a + 10);
f2(1);
// 1
f2(2);
// 12

goS({a: 1, b: 2}, stopIf({a: 1}), ({a, b}) => ({a: a + 10, b}));
// {a: 1, b: 2}

goS({a: 2, b: 2}, stopIf({a: 1}), ({a, b}) => ({a: a + 10, b}));
// {a: 12, b: 2}

goS({a: 1, b: 2},
  stopIf({a: 1}, null),
  ({a, b}) => ({a: a + 10, b}));
// null
```

## String
### html
- [source](https://github.com/marpple/FxJS/blob/master/Strict/html.js)

### join
- [source](https://github.com/marpple/FxJS/blob/master/Strict/join.js)

### strMap
- [source](https://github.com/marpple/FxJS/blob/master/Strict/strMap.js)

### string
- [source](https://github.com/marpple/FxJS/blob/master/Strict/string.js)