[EN](https://github.com/marpple/FxJS) | [KR](https://github.com/marpple/FxJS/blob/master/README_kr.md)

# FxJS - Functional Extensions for Javascript

FxJS는 ECMAScript 6 기반의 함수형 프로그래밍 라이브러리입니다. Iterable, Iterator, Generator, Promise를 다룹니다.

- [Getting Started](#Getting-Started)
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
- [Extention Libraries](#Extention-Libraries)
  - [FxSQL](https://github.com/marpple/FxSQL)
  - [FxDOM](https://github.com/marpple/FxDOM)
  - [FxContrib](https://github.com/marpple/FxContrib)

## Getting Started

### Installation

#### In Modern Browsers Supporting ES6
`fx.js`는 ECMAScript Module로 작성된 FxJS를 브라우저에서 실행할 수 있는 하나의 스크립트 파일로 번들링한 것입니다.


**주의: `fx.js`는 window 객체의 `fx`, `_`, `L`, `C` property를 namespace로 사용합니다.**


- [fx.js](https://github.com/marpple/FxJS/blob/master/dist/fx.js)
- [fx.js.map](https://github.com/marpple/FxJS/blob/master/dist/fx.js.map)
- [fx.min.js](https://github.com/marpple/FxJS/blob/master/dist/fx.min.js)

```html
<script src="https://unpkg.com/fxjs/dist/fx.min.js"></script>
```

```javascript
const { map, filter, reduce, L, C } = _;

map(a => a + 1, [1, 2, 3]);
// [2, 3, 4];
```

#### In Legacy ES5 Browsers
`fx.es5.js`는 **IE11** 브라우저를 타겟으로 FxJS를 빌드한 스크립트 파일입니다.


**주의: `fx.js`와 마찬가지로, `fx.es5.js`역시 window 객체의 `fx`, `_`, `L`, `C` property를 namespace로 사용합니다.**


- [fx.es5.js](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.js)
- [fx.es5.js.map](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.js.map)
- [fx.es5.min.js](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.min.js)

```html
<script src="https://unpkg.com/fxjs/dist/fx.es5.min.js"></script>
```

```javascript
_.reduce((a, b) => a + b, L.map(a => a + 1, [1, 2, 3]));
// 9;
```

#### In Node.js
FxJS는 ECMAScript Module으로 개발되고 있습니다.
하지만 `fxjs`패키지에 배포하는 파일들은 **Node.js 6**버전을 target으로 변환된 CommonJS Module입니다.


```
npm install fxjs
```


```javascript
const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");

// 함수를 개별적으로 가져올 수도 있습니다.
const rangeLazy = require("fxjs/Lazy/rangeLazy");

_.go(
  rangeLazy(1, 5),
  L.filter(a => a % 2),
  L.map(a => a * 10),
  _.reduce(_.add),
  _.log); // 40
```

#### ECMAScript Module
FxJS는 Native ECMAScript Module로만 작성된 `fxjs2`패키지를 별도로 배포하고 있습니다.
`fxjs2`패키지는 `package.json`파일에 `type: "module"`로 정의되어 있습니다.
*mocha와 jest같은 개발 도구에서 아직 Native ESM을 잘 지원하지 않기 때문에 주의해야 합니다.*

```
npm install fxjs2
```

```javascript
import { go, reduce, add, log, L } from "fxjs2";

go(
  L.range(1, 5),
  L.filter(a => a % 2),
  L.map(a => a * 10),
  reduce(add),
  log); // 40
```

### Iteration protocols

제너레이터를 통해 만든 이터레이터를 FxJS의 함수들로 평가할 수 있습니다.

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

### Iterable programming

어떤 값이든 `[Symbol.iterator]()` 메서드를 가진 이터러블이라면 FxJS와 사용할 수 있습니다.

```javascript
const res = go(
  [1, 2, 3, 4, 5],
  filter(a => a % 2),
  reduce(add));

log(res); // 9
```

### Lazy evaluation

`L` 네임스페이스의 함수를 통해 지연 평가를 할 수 있습니다.

```javascript
const res = go(
  L.range(Infinity),
  L.filter(a => a % 2),
  L.take(3),
  reduce(add));

log(res); // 9
```

### RFP style

Reactive functional programming 스타일을 작성할 수 있습니다.

```javascript
go(
  L.range(Infinity),
  L.map(delay(1000)),
  L.map(a => a + 10),
  L.take(3),
  each(log));
// 1초 후 10
// 2초 후 11
// 3초 후 12
```

### Promise/async/await

FxJS의 함수들은 비동기를 잘 다룹니다. Promise의 프로토콜을 잘 따르고 있어 async/await과도 함께 사용할 수 있습니다.

```javascript
// L.interval = time => L.map(delay(time), L.range(Infinity));

await go(
  L.interval(1000),
  L.map(a => a + 30),
  L.takeUntil(a => a == 33),
  each(log));
// 1초 후 30
// 2초 후 31
// 3초 후 32
// 4초 후 33

const res = await go(
  L.interval(1000),
  L.map(a => a + 20),
  L.takeWhile(a => a < 23),
  L.map(tap(log)),
  reduce(add));
// 5초 후 20
// 6초 후 21
// 7초 후 22

log(res);
// 63
```

### Concurrency

`C` 네임스페이스의 함수를 통해 동시/병렬적인 평가가 가능합니다.

```javascript
await map(getPage, range(1, 5));
// 4초 후
// [page1, page2, page3, page4]

const pages = await C.map(getPage, range(1, 5));
// 1초 후
// [page1, page2, page3, page4]
```

`L` 함수들로 지연해둔 함수열을 `C` 함수로 동시에 평가할 수도 있습니다. 이런 방식은 [Clojure Reducers](https://clojure.org/reference/reducers)와 비슷합니다.

```javascript
go(
  range(1, 5),
  map(getPage),
  filter(page => page.line > 50),
  map(getWords),
  flat,
  countBy(identity),
  log);
// 4초 후
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter(page => page.line > 50),
  L.map(getWords),
  C.takeAll, // 4개 페이지 동시 요청
  flat,
  countBy(identity),
  log);
// 1초 후
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter(page => page.line > 50),
  L.map(getWords),
  C.takeAll(2), // 2개 페이지씩 나눠서 동시 요청
  flat,
  countBy(identity),
  log);
// 2초 후
// { html: 78, css: 36, is: 192 ... }
```

### Error handling

FxJS는 자바스크립트의 기본 프로토콜을 지키고 있기 때문에 자바스크립트 표준 에러 핸들링을 사용할 수 있습니다.

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

async/await와 try/catch를 사용하여 비동기 에러 핸들링을 할 수 있습니다. 표준적인 에러 핸들링을 사용하기 때문에 여러 라이브러리들과 함께 사용하기 좋습니다.

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

## API

- [Function](https://github.com/marpple/FxJS/blob/master/API.md#Function)
  - [apply](https://github.com/marpple/FxJS/blob/master/API.md#apply)
  - [call](https://github.com/marpple/FxJS/blob/master/API.md#call)
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
  
## Extention Libraries
- [FxSQL](https://github.com/marpple/FxSQL)
- [FxDOM](https://github.com/marpple/FxDOM)
- [FxContrib](https://github.com/marpple/FxContrib)

위의 라이브러리들은 FxJS를 기반으로 만들어졌습니다.
FxSQL과 FxDOM은 각각 SQL과 DOM을 함수형 API를 통해 다룰 수 있는 라이브러리 입니다.
그리고 FxContrib는 FxJS와 FxDOM, FxSQL의 Contributor를 위해 만들어 졌습니다.
