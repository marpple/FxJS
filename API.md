# API

- [Function](#Function)
  - [apply](#apply)
  - [applyEach](#applyeach)
  - [applyMethod](#applymethod)
  - [bindMethod](#bindmethod)
  - [call](#call)
  - [callEach](#calleach)
  - [callMethod](#callmethod)
  - [constant](#constant)
  - [curry](#curry)
  - [curryN](#curryn)
  - [debounce](#debounce)
  - [go](#go)
  - [juxt](#juxt)
  - [negate](#negate)
  - [once](#once)
  - [pipe](#pipe)
  - [tap](#tap)
  - [throttle](#throttle)
- [Strict](#strict)
  - [add](#add)
  - [append](#append)
  - [baseSel](#basesel)
  - [blockUntilSettled](#blockuntilsettled)
  - [chunk](#chunk)
  - [clone](#clone)
  - [compact](#compact)
  - [countBy](#countby)
  - [deepFlat](#deepflat)
  - [defaults](#defaults)
  - [defaultTo](#defaultto)
  - [delay](#delay)
  - [difference](#difference)
  - [differenceBy](#differenceby)
  - [differenceWith](#differencewith)
  - [divide](#divide)
  - [drop](#drop)
  - [dropRight](#dropright)
  - [dropUntil](#dropuntil)
  - [dropWhile](#dropwhile)
  - [each](#each)
  - [entries](#entries)
  - [extend](#extend)
  - [extendRight](#extendright)
  - [filter](#filter)
  - [find](#find)
  - [findWhere](#findwhere)
  - [flat](#flat)
  - [flatMap](#flatmap)
  - [fork](#fork)
  - [groupBy](#groupby)
  - [head](#head)
  - [identity](#identity)
  - [includes](#includes)
  - [indexBy](#indexby)
  - [initial](#initial)
  - [insert](#insert)
  - [intersection](#intersection)
  - [intersectionBy](#intersectionby)
  - [intersectionWith](#intersectionwith)
  - [invert](#invert)
  - [invertBy](#invertby)
  - [join](#join)
  - [keys](#keys)
  - [last](#last)
  - [map](#map)
  - [mapEntries](#mapentries)
  - [mapObject](#mapobject)
  - [max](#max)
  - [maxBy](#maxby)
  - [mean](#mean)
  - [meanBy](#meanby)
  - [min](#min)
  - [minBy](#minby)
  - [noop](#noop)
  - [object](#object)
  - [omit](#omit)
  - [omitBy](#omitby)
  - [partition](#partition)
  - [pick](#pick)
  - [pickBy](#pickby)
  - [pluck](#pluck)
  - [prepend](#prepend)
  - [promiseAllEntries](#promiseallentries)
  - [promiseAllObject](#promiseallobject)
  - [range](#range)
  - [reduce](#reduce)
  - [reject](#reject)
  - [remove](#remove)
  - [repeat](#repeat)
  - [replace](#replace)
  - [reverse](#reverse)
  - [sel](#sel)
  - [sort](#sort)
  - [sortBy](#sortby)
  - [sortByDesc](#sortbydesc)
  - [sortDesc](#sortdesc)
  - [split](#split)
  - [splitEvery](#splitevery)
  - [subtract](#subtract)
  - [sum](#sum)
  - [sumBy](#sumby)
  - [tail](#tail-rest)
  - [take](#take)
  - [take1](#take1)
  - [takeAll](#takeall)
  - [takeUntil](#takeuntil)
  - [takeWhile](#takewhile)
  - [times](#times)
  - [toIter](#toiter)
  - [union](#union)
  - [unionBy](#unionby)
  - [unionWith](#unionwith)
  - [unique](#unique)
  - [uniqueBy](#uniqueby)
  - [uniqueWith](#uniquewith)
  - [unzip](#unzip)
  - [update](#update)
  - [updateBy](#updateby)
  - [values](#values)
  - [zip](#zip)
  - [zipObj](#zipobj)
  - [zipWith](#zipwith)
- [Predicates](#Predicates)
  - [all](#all)
  - [and](#and)
  - [any](#any)
  - [both](#both)
  - [cond](#cond)
  - [either](#either)
  - [equals](#equals)
  - [equals2](#equals2)
  - [equalsBy](#equalsby)
  - [equalsBy2](#equalsby2)
  - [every](#every)
  - [gt](#gt)
  - [gte](#gte)
  - [has](#has)
  - [ifElse](#ifelse)
  - [isArray](#isarray)
  - [isFunction](#isfunction)
  - [isIterable](#isiterable)
  - [isMatch](#ismatch)
  - [isNil](#isnil)
  - [isNull](#isnull)
  - [isObject](#isobject)
  - [isString](#isstring)
  - [isUndefined](#isundefined)
  - [lt](#lt)
  - [lte](#lte)
  - [match](#match)
  - [merge](#merge)
  - [not](#not)
  - [or](#or)
  - [satisfiesEvery](#satisfiesevery)
  - [satisfiesSome](#satisfiessome)
  - [selEquals](#selequals)
  - [selSatisfies](#selsatisfies)
  - [some](#some)
  - [unless](#unless)
  - [when](#when)
- [Lazy](#lazy)
  - [L.append](#Lappend)
  - [L.chunk](#Lchunk)
  - [L.compact](#Lcompact)
  - [L.concat](#Lconcat)
  - [L.constant](#Lconstant)
  - [L.deepFlat](#LdeepFlat)
  - [L.difference](#Ldifference)
  - [L.differenceBy](#LdifferenceBy)
  - [L.differenceWith](#LdifferenceWith)
  - [L.drop](#Ldrop)
  - [L.dropUntil](#LdropUntil)
  - [L.dropWhile](#LdropWhile)
  - [L.each](#Leach)
  - [L.empty](#Lempty)
  - [L.entries](#Lentries)
  - [L.filter](#Lfilter)
  - [L.flat](#Lflat)
  - [L.flatMap](#LflatMap)
  - [L.insert](#Linsert)
  - [L.intersection](#Lintersection)
  - [L.intersectionBy](#LintersectionBy)
  - [L.intersectionWith](#LintersectionWith)
  - [L.interval](#Linterval)
  - [L.keys](#Lkeys)
  - [L.limitLoad](#LlimitLoad)
  - [L.map](#Lmap)
  - [L.mapEntries](#LmapEntries)
  - [L.prepend](#Lprepend)
  - [L.range](#Lrange)
  - [L.reject](#Lreject)
  - [L.remove](#Lremove)
  - [L.repeat](#Lrepeat)
  - [L.reverse](#Lreverse)
  - [L.slice](#Lslice)
  - [L.splitEvery](#LsplitEvery)
  - [L.take](#Ltake)
  - [L.takeUntil](#LtakeUntil)
  - [L.takeWhile](#LtakeWhile)
  - [L.times](#Ltimes)
  - [L.union](#Lunion)
  - [L.unionBy](#LunionBy)
  - [L.unionWith](#LunionWith)
  - [L.unique](#Lunique)
  - [L.uniqueBy](#LuniqueBy)
  - [L.uniqueWith](#LuniqueWith)
  - [L.values](#Lvalues)
  - [L.update](#Lupdate)
  - [L.updateBy](#LupdateBy)
  - [L.values](#Lvalues)
  - [L.zip](#Lzip)
  - [L.zipWithIndex](#LzipWithIndex)
- [Concurrency](#concurrency)
  - [C.calls](#Ccalls)
  - [C.compact](#Ccompact)
  - [C.drop](#Cdrop)
  - [C.every](#Cevery)
  - [C.filter](#Cfilter)
  - [C.find](#Cfind)
  - [C.head](#Chead)
  - [C.map](#Cmap)
  - [C.mapEntries](#CmapEntries)
  - [C.object](#Cobject)
  - [C.race](#Crace)
  - [C.reduce](#Creduce)
  - [C.some](#Csome)
  - [C.tail](#Ctail)
  - [C.take](#Ctake)
  - [C.take1](#Ctake1)
  - [C.takeAll](#CtakeAll)
  - [C.takeRace](#CtakeRace)
- [Stoppable](#stoppable)
  - [reduceS, stop](#reduces-stop)
  - [goS, pipeS, stop, stopIf](#gos-pipes-stop-stopif)
- [String](#String)
  - [html](#html)
  - [join](#join)
  - [strMap](#strmap)
  - [string](#string)

## Function

### apply

- `(f, iterable) => f(...iterable)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/apply.js)

```javascript
const args = [10, 20];
add(...args); // 30
apply(add, args); // 30
apply(add)(args); // 30
```

### applyEach

- `([f], args) => [f(...args)]`
- `({k: f}, args) => {k: f(...args)}`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/applyEach.js)

```javascript
const args = [2, 3, 4];
const addAll = (a, b, c) => a + b + c;
const multiplyAll = (a, b, c) => a * b * c;

addAll(...args) // 9
multiplyAll(...args) // 24

applyEach([addAll, multiplyAll], args) // [9, 24]
applyEach({ add: addAll, mul: multiplyAll }, args) // { add: 9, mul: 24 }

```

### applyMethod

- `(String k, { k: v }, args) => v(...args)`
- `String k => ({ k: v }, args) => v(...args) `  
- [source](https://github.com/marpple/FxJS/blob/master/Strict/applyMethod.js)

```javascript
applyMethod('add', { add: (a, b, c = 0) => a + b + c }, [1, 2]) // 3
applyMethod('add', { add: (a, b, c = 0) => a + b + c }, [1, 2, 3]) // 6
applyMethod('add')({ add: (a, b, c = 0) => a + b + c }, [1, 2, 3]) // 6
```

### bindMethod

- [source](https://github.com/marpple/FxJS/blob/master/Strict/bindMethod.js)


### call

- `(f, ...args) => f(...args)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/call.js)

```javascript
add(10, 20); // 30
call(add, 10, 20); // 30
call(add)(10, 20); // 30
```

### callEach

- `([(a, b) => c, (a, b) => d, ...], a, b) => [c, d, ...]`
- `([(a, b) => Promise c, (a, b) => Promise d, ...], a, b) => Promise [c, d]`
- `({ k: (a, b) => c, k2: (a, b) => d }, a, b) => { k: c, k2: d }`
- `({ k: (a, b) => Promise c, k2: (a, b) => Promise d }, a, b) => Promise { k: c, k2: d }`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/callEach.js)

```javascript
callEach([(a) => a + 1, (a) => a + 2], 10);
// [11, 12]

callEach(
  {
    a: (a) => a + 1,
    b: (a) => a + 2,
  },
  10
);
// {a: 11, b: 12}

callEach([
  (_) => Promise.resolve(1),
  (_) => Promise.resolve(2),
  (_) => Promise.resolve(3),
]).then(log);
// [1, 2, 3]

callEach({
  a: (_) => Promise.resolve(1),
  b: (_) => Promise.resolve(2),
  c: (_) => Promise.resolve(3),
}).then(log);
// {a: 1, b: 2, c: 3}
```

### callMethod

- [source](https://github.com/marpple/FxJS/blob/master/Strict/callMethod.js)

### constant

- `a => _ => a`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/constant.js)

```javascript
const a = constant("A");
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

### curryN

- [source](https://github.com/marpple/FxJS/blob/master/Strict/curryN.js)

```javascript
const addAll = (...args) => args.reduce((a, b) => a + b);

const add1 = curryN(1, addAll);
log(add1(1)(2)); // 3
log(add1(1, 2)); // 3
// add1(1)(2)(3) => error!

const add2 = curryN(2, addAll);
log(add2(1)(2)(3)); // 6
log(add2(1, 2)(3)); // 6
log(add2(1)(2, 3)); // 6
log(add2(1, 2, 3)); // 6
// add2(1)(2)(3)(4); => error!
```

### debounce

- `(f, time) => (...args) => `
- [source](https://github.com/marpple/FxJS/blob/master/Strict/debounce.js)

### go

- `(a, a => b, b => c, ..., y => z) => z`
- `(Promise a, a => b, b => c, ..., y => z) => Promise z`
- `(a, a => Promise b, b => Promise c, ..., y => z) => Promise z`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/go.js)

```javascript
go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  log
); // 11

go(
  0,
  (a) => Promise.resolve(a + 1),
  (a) => a + 10,
  log
); // 11

const b = go(
  0,
  (a) => a + 1,
  (a) => a + 10
);
log(b); // 11

const pb = go(
  0,
  (a) => Promise.resolve(a + 1),
  (a) => a + 10
);
pb.then(log); // 11
```

### juxt

- `(f, f2, f3, ...) => (...args) => [f(...args), f2(...args), f3(...args), ...]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/juxt.js)

```javascript
const compute = juxt(min, max, sum, mean);
log(...compute([1, 2, 3, 4, 5])); // 1, 5, 15, 3
```

### negate

- `f => a => !f(a)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/negate.js)

```javascript
const a = negate((a) => a);
log(a(true)); // false
log(a(false)); // true
```

### once

- `f => f`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/once.js)

```javascript
const f = once((a) => a + 10);
log(f(5)); // 15
log(f(5)); // 15
```

### pipe

- `((a, b, ...) => d, d => e, ..., y => z) => (a, b, ...) => z`
- `((a, b, ...) => Promise d, d => e, e => Promise f, ..., y => z) => (a, b, ...) => Promise z`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pipe.js)

```javascript
const f1 = pipe(
  (a) => a.toUpperCase(),
  (a) => a == "A"
);
const b = f1("a");
log(b); // true

const total = (f) =>
  pipe(
    map(f),
    reduce((a, b) => a + b)
  );

const totalAge = total(({ age }) => age);

go(fetchUsers(), totalAge, log);
// 186

go(
  fetchProducts(),
  total(({ price }) => price),
  log
);
// 156000
```

### tap

- `(g, f, ...) => a => go(a, g, f, ..., _ => a)`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/tap.js)

```javascript
go(
  10,
  (a) => a + 5,
  tap((a) => a + 5, log), // 20
  (a) => a + 10,
  log
); // 25
```

### throttle

- (f, time) => 
- [source](https://github.com/marpple/FxJS/blob/master/Strict/throttle.js)

## Strict

### add

- `Number => Number => Number`
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
const sel = baseSel(".");
sel("a.b", { a: { b: 10 } });
// 10

sel("a.b", { b: { c: 20 } });
// undefined

const sel2 = baseSel(">");
sel2("a>b", { a: { b: 10 } });
// 10

sel2("a>b", { b: { c: 20 } });
// undefined
```

### blockUntilSettled

- `f => f`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/blockUntilSettled.js)

```javascript
// useful for functions to block multiple calls

const callApi = blockUntilSettled(() => {
  console.log('called!');
  return delay(100, 5);
});

(async function () {
  const p1 = callApi(); // console - called!
  console.log('after p1'); // console - after p1
  const p2 = callApi(); // 
  console.log('after p2'); // console - after p2
  const p3 = callApi(); // 
  console.log('after p3'); // console - after p3
  const [r1, r2, r3] = await Promise.all([p1, p2, p3]);

  const r4 = await callApi(); // console - called!

  console.log(r1, r2, r3, r4); // 5, undefined, undefined, 5
  
})();

```


### chunk

- [source](https://github.com/marpple/FxJS/blob/master/Strict/chunk.js)

```javascript
chunk(2, [1, 2, 3, 4, 5]);
// [[1, 2], [3, 4], [5]]
```

### clone

- [source](https://github.com/marpple/FxJS/blob/master/Strict/clone.js)

### compact

- `Iterable a => [a]`
- `Iterable Promise a => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/compact.js)

```javascript
compact([1, 2, 0, false, true, null]);
// [1, 2, true]
```

### countBy

- `(a => b) => Iterable a => { [b]: n }`
- `(a => b) => Iterable Promise a => Promise { [b]: n }`
- `(a => Promise b) => Iterable a => Promise { [b]: n }`
- `(a => Promise b) => Iterable Promise a => Promise { [b]: n }`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/countBy.js)

```javascript
countBy((a) => (a % 2 ? "odd" : "even"), [1, 2, 3, 4, 5]);
// { odd: 3, even: 2 }
```

### deepFlat

- `[[[[a]]]] => [a]`
- `Iterable Iterable Iterable ... Iterable a => [a]`
- `[Promise [[Promise a]]] => Promise [a]`
- `[Promise [[Iterable Promise a]]] => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/deepFlat.js)

```javascript
deepFlat([[1, 2, [3, [4, 5, [6], [[7]]]]]]);
// [1, 2, 3, 4, 5, 6, 7];
```

### defaults

- `({}, {}, ..., {}) => {}`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/defaults.js)

```javascript
defaults({ flavor: "chocolate" }, { flavor: "vanilla", sprinkles: "lots" });
// {flavor: "chocolate", sprinkles: "lots"}
```

### defaultTo

- [source](https://github.com/marpple/FxJS/blob/master/Strict/defaultTo.js)

```javascript
const obj = { a: 1, c: null, d: NaN };
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

- `time => a => Promise a`
- `(time, a) => Promise a`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/delay.js)

```javascript
go("hi", delay(1000), log); // After 1 second "hi"
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
differenceBy((a) => a.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }]);
// [{ x: 2 }]
```

### differenceWith

- [source](https://github.com/marpple/FxJS/blob/master/Strict/differenceWith.js)

```javascript
const cmp = (x, y) => x.a === y.a;
const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
const l2 = [{ a: 3 }, { a: 4 }];
differenceWith(cmp, l1, l2);
// [{a: 1}, {a: 2}, {a: 5}]
```

### divide

- [source](https://github.com/marpple/FxJS/blob/master/Strict/divide.js)

```javascript
divide(4, 2) // 2
divide(4)(2) // 2
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
dropUntil((a) => a > 1, [1, 2, 3, 4]);
// [3, 4]
```

### dropWhile

- [source](https://github.com/marpple/FxJS/blob/master/Strict/dropWhile.js)

```javascript
dropWhile((a) => a < 3, [1, 2, 3, 4]);
// [3, 4]
```

### each

- `(a => b) => Iterable a => [a]`
- `(a => b) => Iterable Promise a => Promise [a]`
- `(a => Promise b) => Iterable a => Promise [a]`
- `(a => Promise b) => Iterable Promise a => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/each.js)

```javascript
go(
  document.querySelectorAll(".post"),
  each((el) => (el.innerHTML = "")),
  log
); // [div.post, div.post, div.post];
```

### entries

- `{ k: v } => [[k, v]]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/entries.js)

```javascript
entries({ a: 1, b: 2, c: 3 });
// [['a', 1], ['b', 2], ['c', 3]]
```

### extend

- `({}, {}, ..., {}) => {}`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/extend.js)

```javascript
extend({ flavor: "vanilla", sprinkles: "lots" }, { flavor: "chocolate" });
// {flavor: "chocolate", sprinkles: "lots"}


```

### extendRight
- `({}, {}, ..., {}) => {}`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/extendRight.js)

```javascript
extendRight({ flavor: "vanilla", sprinkles: "lots" }, { flavor: "chocolate" });
// {flavor: "vanilla", sprinkles: "lots"}
```

### filter

- `(a => Boolean) => Iterable a => [a]`
- `(a => Boolean) => Iterable Promise a => Promise [a]`
- `(a => Promise Boolean) => Iterable a => Promise [a]`
- `(a => Promise Boolean) => Iterable Promise a => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/filter.js)

```javascript
filter((a) => a % 2, [1, 2, 3]);
// [1, 3]

filter((a) => a % 2, [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(log);
// [1, 3]

filter((a) => Promise.resolve(a % 2), [1, 2, 3]).then(log);
// [1, 3]

filter((a) => Promise.resolve(a % 2), [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(log);
// [1, 3]
```

### find

- `find = head . L.filter`
- `(a => Boolean) => Iterable a => a`
- `(a => Promise Boolean) => Iterable a => Promise a`
- `(a => Boolean) => Iterable Promise a => Promise a`
- `(a => Promise Boolean) => Iterable Promise a => Promise a`
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

- `{k: v} => Iterable {k: v} => {k: v}`
- `{k: v} => Iterable Promise {k: v} => Promise {k: v}`
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

- `(Iterable Iterable a, Number depth) => [a]`
- `(Iterable Promise Iterable a, Number depth) => Promise [a]`
- `(Iterable Iterable Promise a, Number depth) => Promise [a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/flat.js)

```javascript
flat([[1, 2], [3, 4]]);
// [1, 2, 3, 4]

flat([[1, [2]],[[[3]]]]);
// [1, [2], [[3]]];

flat([[1, [2]], [[[3]]]], 2);
// [1, 2, [3]];

flat([[1, [2]], [[[3]]]], 3);
// [1, 2, 3];

await flat([Promise.resolve([1, 2]), [Promise.resolve(3), 4]]);
// [1, 2, 3, 4]
```

### flatMap

- `flatMap = flat . mapLazy`
- `(a => Iterable b) => Iterable a => [b]`
- `(a => Iterable b) => Iterable Promise a => Promise [b]`
- `(a => Iterable Promise b) => Iterable a => Promise [b]`
- `(a => Promise Iterable b) => Iterable Promise a => Promise [b]`
- `(a => Promise Iterable Promise b) => Iterable a => Promise [b]`
- `(a => Promise Iterable Promise b) => Iterable Promise a => Promise [b]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/flatMap.js)

```javascript
flatMap((a) => range(a), [1, 2]);
// [0, 0, 1]

await flatMap((a) => Promise.resolve(range(a)), [1, 2]);
// [0, 0, 1]
```

### fork

- [source](https://github.com/marpple/FxJS/blob/master/Strict/fork.js)

### groupBy

- [source](https://github.com/marpple/FxJS/blob/master/Strict/groupBy.js)

```javascript
groupBy((a) => (a % 2 ? "odd" : "even"), [1, 2, 3, 4, 5]);
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
const identity = (a) => a;
```

### includes

- [source](https://github.com/marpple/FxJS/blob/master/Strict/includes.js)

### indexBy

- [source](https://github.com/marpple/FxJS/blob/master/Strict/indexBy.js)

```javascript
const products = [
  { id: 1, price: 100 },
  { id: 3, price: 100 },
  { id: 5, price: 100 },
];
indexBy((p) => p.id, products);
// {1: {id: 1, price: 100}, 3: {id: 3, price: 100}, 5: {id: 5, price: 100}}
```

### initial

- initial == dropRight
- [source](https://github.com/marpple/FxJS/blob/master/Strict/initial.js)

```javascript
initial([1, 2, 3]);
// [1, 2]
```

### insert

- `(Number a, b, Array c) => Array d` 
- [source](https://github.com/marpple/FxJS/blob/master/Strict/insert.js)

```javascript
// prepend
insert(-1, 0, [1, 2, 3]) // [0, 1, 2, 3]
insert(0, 0, [1, 2, 3]) // [0, 1, 2, 3]

// middle
insert(2, 2.5, [1, 2, 3]) // [1, 2, 2.5, 3]

// append
insert(3, 4, [1, 2, 3]) // [1, 2, 3, 4]
insert(100, 4, [1, 2, 3]) // [1, 2, 3, 4]
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
intersectionBy((o) => o.x, [{ x: 2 }, { x: 1 }], [{ x: 1 }]);
// [{ x: 1 }]
```

### intersectionWith

- [source](https://github.com/marpple/FxJS/blob/master/Strict/intersectionWith.js)

```javascript
const cmp = (x, y) => x.a === y.a;
const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
const l2 = [{ a: 3 }, { a: 4 }];
intersectionWith(cmp, l1, l2);
// [{a: 3}, {a: 4}]
```

### invert

- [source](https://github.com/marpple/FxJS/blob/master/Strict/invert.js)

### invertBy

- [source](https://github.com/marpple/FxJS/blob/master/Strict/invertBy.js)

### keys

- [source](https://github.com/marpple/FxJS/blob/master/Strict/keys.js)

```javascript
keys({ a: 1, b: 2, c: 3 });
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
map((a) => a + 10, [1, 2, 3]);
// [11, 12, 13]

map((a) => Promise.resolve(a + 10), [1, 2, 3]).then(log);
// [11, 12, 13]

map((a) => a.nodeName, document.querySelectorAll("head *"));
// ["META", "TITLE", "SCRIPT"]

map(
  (a) => a + 10,
  (function* () {
    yield 4;
    yield 5;
  })()
);
// [14, 15]
```

### mapEntries

- `(a => b) => Iterable [k, a] => [[k, b]]`
- `(a => b) => Iterable [k, Promise a] => Promise [[k, b]]`
- `(a => Promise b) => Iterable [k, a] => Promise [[k, b]]`
- `(a => Promise b) => Iterable [k, Promise a] => Promise [[k, b]]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/mapEntries.js)

```javascript
mapEntries((a) => a + 10, [
  ["a", 1],
  ["b", 2],
]);
// [['a', 11], ['b', 12]]

mapEntries((a) => Promise.resolve(a + 10), [
  ["a", 1],
  ["b", 2],
]).then(log);
// [['a', 11], ['b', 12]]

// entries == Object.entries
// object == Object.fromEntries
object(mapEntries((a) => a + 10, entries({ a: 1, b: 2 })));
// { a: 11, b: 12 }

go(
  { a: 1, b: 2 },
  entries,
  mapEntries((a) => Promise.resolve(a + 10)),
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
mapObject((a) => a + 10, { a: 1, b: 2 });
// { a: 11, b: 12 }

mapObject((a) => Promise.resolve(a + 10), { a: 1, b: 2 }).then(log);
// { a: 11, b: 12 }

go(
  { a: 1, b: 2 },
  mapObject((a) => Promise.resolve(a + 10)),
  log
);
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
maxBy((a) => a * -1, [1, 3, 7, 4]);
// 1
```

### mean

- [source](https://github.com/marpple/FxJS/blob/master/Strict/mean.js)

```javascript
mean([1, 2, 3, 4, 5, 6]) // 3
mean(L.range(1, 6)) // 3
await mean(Promise.resolve([1, 2, 3, 4, 5, 6])) // 3
```

### meanBy

- [source](https://github.com/marpple/FxJS/blob/master/Strict/meanBy.js)

```javascript
meanBy(identity, [1, 2, 3, 4, 5, 6]) // 3
meanBy(
  sel('age'),
  [{ age: 10 }, { age: 20 }, { age: 30 }, { age: 40 }, { age: 50 }, { age: 60 }]
)
// 35
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
minBy((a) => a * -1, [1, 3, 7, 4]);
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
object([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
// {a: 1, b: 2, c: 3}
```

### omit

- `([], {}) => {}`
- `(keys, object) => object without input keys`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/omit.js)

```javascript
omit(["a, c"], { a: 1, b: 2, c: 3, d: 4 });
// {b: 2, d: 4}
```

### omitBy

- `omitBy <-> pickBy`
- `(f, {}) => {}`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/omitBy.js)

```javascript
omitBy(([k]) => ['a', 'b'].includes(k), { a: 1, b: 2, c: 3, d: 4 });
// {b: 2, d: 4}

omitBy(([k, v]) => v % 2 === 0, { a: 1, b: 2, c: 3, d: 4 });
// {a: 1, c: 3}

```

### partition

- [source](https://github.com/marpple/FxJS/blob/master/Strict/partition.js)

```javascript
partition((a) => a % 2, [1, 2, 3, 4, 5]);
// [[1, 3, 5], [2, 4]]
```

### pick

- `([], {}) => {}`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pick.js)

```javascript
pick(["a, c"], { a: 1, b: 2, c: 3, d: 4 });
// {a: 1, c: 3}
```

### pickBy

- `pickBy <-> omitBy`
- `(f, {}) => {}`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pickBy.js)

```javascript
pickBy(([k, v]) => ['a', 'c'].includes(k), { a: 1, b: 2, c: 3, d: 4 });
// {a: 1, c: 3}

pickBy(([k, v]) => v % 2 === 0, { a: 1, b: 2, c: 3, d: 4 });
// {b: 2, d: 4}
```

### pluck

- `String k => Iterable a => [a[k]]`
- `String k => Iterable Promise a => Promise [a[k]]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pluck.js)

```javascript
pluck("id", [{ id: 1 }, { id: 3 }]);
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
const add = (a, b) => a + b;

reduce(add, [1, 2, 3]);
// 6

reduce(add, 10, [1, 2, 3]);
// 16

await reduce(add, [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);
// 6
```

### reject

- `(a => Boolean) => Iterable a => []`
- `(a => Boolean) => Iterable Promise a => Promise []`
- `(a => Promise Boolean) => Iterable a => Promise []`
- `(a => Promise Boolean) => Iterable Promise a => Promise []`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/reject.js)

```javascript
reject((a) => a % 2, [1, 2, 3]);
// [2]

reject((a) => a % 2, [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(log);
// [2]

reject((a) => Promise.resolve(a % 2), [1, 2, 3]).then(log);
// [2]

reject((a) => Promise.resolve(a % 2), [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(log);
// [2]
```

### remove

- `(Number start, Iterable) => Array`
- `(Number start, Number count, Iterable) => Array`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/remove.js)

```javascript
// remove with index
remove(0, [1, 2, 3, 4, 5]) // [1, 2, 3, 4]
remove(0, L.range(5)) // [1, 2, 3, 4]

// remove with count
remove(1, 2, [1, 2, 3, 4, 5]) // [0, 3, 4]
remove(1, 2, L.range(5)) // [0, 3, 4]
```

### repeat

- `(a, Number size) => [a, a, a, ...a]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/repeat.js)

```javascript
repeat("hi", 5) // ["hi", "hi", "hi", "hi", "hi"]
```

### replace

- `(String substr|Regex, String newSubstr, String target) => String`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/replace.js)

```javascript
// search by string
replace("foo", "bar", "foo foo foo") // "bar foo foo"

// search by regex
replace(/foo/g, "bar", "foo foo foo") // "bar bar bar"
```

### reverse

- [source](https://github.com/marpple/FxJS/blob/master/Strict/reverse.js)

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

### subtract

- `(Number, Number) => Number`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/subtract.js)

```javascript
subtract(4, 1) // 3
```


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

### times

- `range . map`
- `(f, Number n) => [f(1), f(2), ...f(n-1)]`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/times.js)

```javascript
// times(String, 3)
times(String, 3) // ["0", "1", "2"]
times(n => n * 2, 5) // [2, 4, 6, 8, 10]

// times(Promise.resolve.bind(Promise), 3)
await times(n => Promise.resolve(n), 3) // [0, 1, 2]
```

### toIter

- [source](https://github.com/marpple/FxJS/blob/master/Strict/toIter.js)

### union

- [source](https://github.com/marpple/FxJS/blob/master/Strict/union.js)

### unionBy

- [source](https://github.com/marpple/FxJS/blob/master/Strict/unionBy.js)

### unionWith

- [source](https://github.com/marpple/FxJS/blob/master/Strict/unionWith.js)

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
  { name: "aa" },
  { name: "Aa" },
  { name: "bb" },
  { name: "cc" },
  { name: "bb" },
];

uniqueBy((u) => u.name.toUpperCase(), users);
// [{name: 'aa'}, {name: 'bb'}, {name: 'cc'}]
```

### uniqueWith

- [source](https://github.com/marpple/FxJS/blob/master/Strict/uniqueWith.js)

### unzip

- [source](https://github.com/marpple/FxJS/blob/master/Strict/unzip.js)

### update

- [source](https://github.com/marpple/FxJS/blob/master/Strict/update.js)

### updateBy

- [source](https://github.com/marpple/FxJS/blob/master/Strict/updateBy.js)

### values

- [source](https://github.com/marpple/FxJS/blob/master/Strict/values.js)

### zip

- [source](https://github.com/marpple/FxJS/blob/master/Strict/zip.js)

### zipObj

- [source](https://github.com/marpple/FxJS/blob/master/Strict/zipObj.js)

### zipWith

- [source](https://github.com/marpple/FxJS/blob/master/Strict/zipWith.js)

## Predicates

### all

- [source](https://github.com/marpple/FxJS/blob/master/Strict/all.js)

### and

- [source](https://github.com/marpple/FxJS/blob/master/Strict/and.js)

### any

- [source](https://github.com/marpple/FxJS/blob/master/Strict/any.js)

### both

- [source](https://github.com/marpple/FxJS/blob/master/Strict/both.js)

### cond

- [source](https://github.com/marpple/FxJS/blob/master/Strict/cond.js)

### either

- [source](https://github.com/marpple/FxJS/blob/master/Strict/either.js)

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

### gt

- [source](https://github.com/marpple/FxJS/blob/master/Strict/gt.js)

### gte

- [source](https://github.com/marpple/FxJS/blob/master/Strict/gte.js)

### has

- [source](https://github.com/marpple/FxJS/blob/master/Strict/has.js)

### ifElse

- [source](https://github.com/marpple/FxJS/blob/master/Strict/ifElse.js)

### isArray

- [source](https://github.com/marpple/FxJS/blob/master/Strict/isArray.js)

### isFunction

- [source](https://github.com/marpple/FxJS/blob/master/Strict/isFunction.js)

### isIterable

- [source](https://github.com/marpple/FxJS/blob/master/Strict/isIterable.js)

### isMatch

- [source](https://github.com/marpple/FxJS/blob/master/Strict/isMatch.js)

### isNil
- `a => b`
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isNil.js)

```javascript
isNil(undefined) // true
isNil(null) // true
isNil(false) // false
isNil([]) // false
isNil('') // false
```

### isNull
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isNull.js)

### isObject
- [source](https://github.com/marpple/FxJS/blob/master/Strict/isObject.js)

### isString

- [source](https://github.com/marpple/FxJS/blob/master/Strict/isString.js)

### isUndefined

- [source](https://github.com/marpple/FxJS/blob/master/Strict/isUndefined.js)

### lt

- [source](https://github.com/marpple/FxJS/blob/master/Strict/lt.js)

### lte

- [source](https://github.com/marpple/FxJS/blob/master/Strict/lte.js)

### match
  
- [source](https://github.com/marpple/FxJS/blob/master/Strict/match.js)

### merge

- [source](https://github.com/marpple/FxJS/blob/master/Strict/merge.js)

### not

- [source](https://github.com/marpple/FxJS/blob/master/Strict/not.js)

### or

- [source](https://github.com/marpple/FxJS/blob/master/Strict/or.js)

### satisfiesEvery

- [source](https://github.com/marpple/FxJS/blob/master/Strict/satisfiesEvery.js)

### satisfiesSome

- [source](https://github.com/marpple/FxJS/blob/master/Strict/satisfiesSome.js)

### selEquals

- [source](https://github.com/marpple/FxJS/blob/master/Strict/selEquals.js)

### selSatisfies

- [source](https://github.com/marpple/FxJS/blob/master/Strict/selSatisfies.js)

### some

- [source](https://github.com/marpple/FxJS/blob/master/Strict/some.js)

### unless

- [source](https://github.com/marpple/FxJS/blob/master/Strict/unless.js)

### when

- [source](https://github.com/marpple/FxJS/blob/master/Strict/when.js)

## Lazy

### L.append

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/appendL.js)

### L.chunk

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/chunkL.js)

### L.compact

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/compactL.js)

### L.concat

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/concatL.js)

### L.constant

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/constantL.js)

### L.deepFlat

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/deepFlatL.js)

### L.difference

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/differenceL.js)

### L.differenceBy

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/differenceByL.js)

### L.differenceWith

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/differenceWithL.js)

### L.drop

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/dropL.js)

### L.dropUntil

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/dropUntilL.js)

### L.dropWhile

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/dropWhileL.js)

### L.each

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/eachL.js)

### L.empty

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/emptyL.js)

### L.entries

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/entriesL.js)

### L.filter

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/filterL.js)

```javascript
const iterator = L.filter((a) => a % 2, [1, 2, 3]);
iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 3, done: false }
iterator.next(); // { value: undefined, done: true }

go(
  L.range(1, Infinity),
  L.filter((a) => a % 2),
  take(2)
);
// [1, 3]

await go(
  L.range(Infinity),
  L.map((a) => Promise.resolve(a)),
  L.filter((a) => a % 2),
  take(2)
);
// [1, 3]
```

### L.flat

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/flatL.js)

### L.flatMap

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/flatMapL.js)

### L.insert

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/insertL.js)

### L.intersection

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intersectionL.js)

### L.intersectionBy

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intersectionByL.js)

### L.intersectionWith

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intersectionWithL.js)

### L.interval

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/intervalL.js)

### L.keys

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/keysL.js)

### L.limitLoad

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/limitLoadL.js)

### L.map

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/mapL.js)

### L.mapEntries

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/mapEntriesL.js)

### L.prepend

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/prependL.js)

### L.range

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/rangeL.js)

### L.reject

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/rejectL.js)

### L.remove

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/removeL.js)

### L.repeat

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/repeatL.js)

### L.reverse

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/reverseL.js)

### L.slice

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/sliceL.js)

### L.splitEvery

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/splitEveryL.js)

### L.take

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/takeL.js)

### L.takeUntil

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/takeUntilL.js)

### L.takeWhile

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/takeWhileL.js)

### L.times

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/timesL.js)

### L.union

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/unionL.js)

### L.unionBy

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/unionByL.js)

### L.unionWith

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/unionWithL.js)

### L.unique

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/uniqueL.js)

### L.uniqueBy

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/uniqueByL.js)

### L.uniqueWith

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/uniqueWithL.js)

### L.values

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/valuesL.js)

### L.update

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/updateL.js)

### L.updateBy

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/updateByL.js)

### L.zipWithIndex

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/zipWithIndexL.js)

### L.zip

- [source](https://github.com/marpple/FxJS/blob/master/Lazy/zipL.js)

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
reduceS(
  (a, b) => {
    const res = a + b;
    return res > 5 ? stop(res) : res;
  },
  [1, 2, 3, 4]
);
// 6
```

### goS, pipeS, stop, stopIf

- [source](https://github.com/marpple/FxJS/blob/master/Strict/goS.js)
- [source](https://github.com/marpple/FxJS/blob/master/Strict/pipeS.js)
- [source](https://github.com/marpple/FxJS/blob/master/Strict/stop.js)
- [source](https://github.com/marpple/FxJS/blob/master/Strict/stopIf.js)

```javascript
const f1 = pipeS(
  (a) => (a % 2 ? stop(a) : a),
  (a) => a + 10
);
f1(1);
// 1
f1(2);
// 12

const f2 = pipeS(
  stopIf((a) => a % 2),
  (a) => a + 10
);
f2(1);
// 1
f2(2);
// 12

goS({ a: 1, b: 2 }, stopIf({ a: 1 }), ({ a, b }) => ({ a: a + 10, b }));
// {a: 1, b: 2}

goS({ a: 2, b: 2 }, stopIf({ a: 1 }), ({ a, b }) => ({ a: a + 10, b }));
// {a: 12, b: 2}

goS({ a: 1, b: 2 }, stopIf({ a: 1 }, null), ({ a, b }) => ({ a: a + 10, b }));
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
