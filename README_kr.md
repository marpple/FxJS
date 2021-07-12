[EN](https://github.com/marpple/FxJS) | [KR](https://github.com/marpple/FxJS/blob/master/README_kr.md)

# FxJS - Functional Extensions for Javascript

![npm](https://img.shields.io/npm/v/fxjs)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/fxjs)
![npm](https://img.shields.io/npm/dt/fxjs)
![NPM](https://img.shields.io/npm/l/fxjs)

FxJS는 ECMAScript 6 언어의 Iterable / Iterator, Generator, Promise를 기반으로 작성된 함수형 자바스크립트 라이브러리입니다.

- [Getting Started](#Getting-Started)
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
  - [FxContrib](https://github.com/marpple/FxContrib)

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
  // 약 300ms 후에 14 출력
  </script>
  ```
  **주의: 브라우저에서 `fx.js` 스크립트 파일이 로드되면 `_`가 전역 변수로 사용됩니다.**

#### In the node.js environment
FxJS는 CommonJS와 ES6 Module을 함께 지원하는 [Dual Module Package](https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_dual_commonjs_es_module_packages) 입니다.
FxJS 패키지의 두 가지 모듈 형식 중에서 commonjs는` node.js 6`버전 이상 부터 지원하며, ESM은 `node.js 12`버전 이상 부터 사용가능 합니다.

```
npm install fxjs
```
- CommonJS (>= node v6)
  ```javascript
  const FxJS = require("fxjs");
  const _ = require("fxjs/Strict");
  const L = require("fxjs/Lazy");
  const C = require("fxjs/Concurrency");
  
  // fxjs의 default export module 객체는 Lazy, Concurrency를 포함한 모든 함수를 가지고 있습니다.
  const { reduce, mapL, takeAllC } = FxJS;
  
  // 함수를 개별적으로 가져올 수도 있습니다.
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
FxJS는 Node.js 공식 문서에 소개된 Dual Module Package를 지원하는 두 가지 방법 중 [Isolate state](https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_approach_2_isolate_state) 방식을 채택하였습니다.
따라서 아래와 같이 CommonJS 모듈과 ES 모듈을 함께 사용하는 경우에 모듈이나 함수 객체의 동등 비교에 주의해야 합니다. 자세한 내용은 [Node.js 공식 문서](https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_dual_commonjs_es_module_packages) 를 참고해 주세요.
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

제너레이터를 통해 만든 이터레이터를 FxJS의 함수들로 평가할 수 있습니다.

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

어떤 값이든 `[Symbol.iterator]()` 메서드를 가진 이터러블이라면 FxJS와 사용할 수 있습니다.

```javascript
const res = go(
  [1, 2, 3, 4, 5],
  filter((a) => a % 2),
  reduce(add)
);

log(res); // 9
```

### Lazy evaluation

`L` 네임스페이스의 함수를 통해 지연 평가를 할 수 있습니다.

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

Functional reactive programming 스타일을 작성할 수 있습니다.

```javascript
go(
  L.range(Infinity),
  L.map(delay(1000)),
  L.map((a) => a + 10),
  L.take(3),
  each(log)
);
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
  L.map((a) => a + 30),
  L.takeUntil((a) => a == 33),
  each(log)
);
// 1초 후 30
// 2초 후 31
// 3초 후 32
// 4초 후 33

const res = await go(
  L.interval(1000),
  L.map((a) => a + 20),
  L.takeWhile((a) => a < 23),
  L.map(tap(log)),
  reduce(add)
);
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
  filter((page) => page.line > 50),
  map(getWords),
  flat,
  countBy(identity),
  log
);
// 4초 후
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter((page) => page.line > 50),
  L.map(getWords),
  C.takeAll, // 4개 페이지 동시 요청
  flat,
  countBy(identity),
  log
);
// 1초 후
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 5),
  L.map(getPage),
  L.filter((page) => page.line > 50),
  L.map(getWords),
  C.takeAll(2), // 2개 페이지씩 나눠서 동시 요청
  flat,
  countBy(identity),
  log
);
// 2초 후
// { html: 78, css: 36, is: 192 ... }
```

### Error handling

FxJS는 자바스크립트의 기본 프로토콜을 지키고 있기 때문에 자바스크립트 표준 에러 핸들링을 사용할 수 있습니다.

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

async/await와 try/catch를 사용하여 비동기 에러 핸들링을 할 수 있습니다. 표준적인 에러 핸들링을 사용하기 때문에 여러 라이브러리들과 함께 사용하기 좋습니다.

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
  - [L.append](https://github.com/marpple/FxJS/blob/master/API.md#Lappend)
  - [L.chunk](https://github.com/marpple/FxJS/blob/master/API.md#Lchunk)
  - [L.compact](https://github.com/marpple/FxJS/blob/master/API.md#Lcompact)
  - [L.concat](https://github.com/marpple/FxJS/blob/master/API.md#Lconcat)
  - [L.constant](https://github.com/marpple/FxJS/blob/master/API.md#Lconstant)
  - [L.deepFlat](https://github.com/marpple/FxJS/blob/master/API.md#LdeepFlat)
  - [L.difference](https://github.com/marpple/FxJS/blob/master/API.md#Ldifference)
  - [L.differenceBy](https://github.com/marpple/FxJS/blob/master/API.md#LdifferenceBy)
  - [L.differenceWith](https://github.com/marpple/FxJS/blob/master/API.md#LdifferenceWith)
  - [L.drop](https://github.com/marpple/FxJS/blob/master/API.md#Ldrop)
  - [L.dropUntil](https://github.com/marpple/FxJS/blob/master/API.md#LdropUntil)
  - [L.dropWhile](https://github.com/marpple/FxJS/blob/master/API.md#LdropWhile)
  - [L.empty](https://github.com/marpple/FxJS/blob/master/API.md#Lempty)
  - [L.entries](https://github.com/marpple/FxJS/blob/master/API.md#Lentries)
  - [L.filter](https://github.com/marpple/FxJS/blob/master/API.md#Lfilter)
  - [L.flat](https://github.com/marpple/FxJS/blob/master/API.md#Lflat)
  - [L.flatMap](https://github.com/marpple/FxJS/blob/master/API.md#LflatMap)
  - [L.insert](https://github.com/marpple/FxJS/blob/master/API.md#Linsert)
  - [L.intersection](https://github.com/marpple/FxJS/blob/master/API.md#Lintersection)
  - [L.intersectionBy](https://github.com/marpple/FxJS/blob/master/API.md#LintersectionBy)
  - [L.intersectionWith](https://github.com/marpple/FxJS/blob/master/API.md#LintersectionWith)
  - [L.interval](https://github.com/marpple/FxJS/blob/master/API.md#Linterval)
  - [L.keys](https://github.com/marpple/FxJS/blob/master/API.md#Lkeys)
  - [L.limitLoad](https://github.com/marpple/FxJS/blob/master/API.md#LlimitLoad)
  - [L.map](https://github.com/marpple/FxJS/blob/master/API.md#Lmap)
  - [L.mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#LmapEntries)
  - [L.prepend](https://github.com/marpple/FxJS/blob/master/API.md#Lprepend)
  - [L.range](https://github.com/marpple/FxJS/blob/master/API.md#Lrange)
  - [L.reject](https://github.com/marpple/FxJS/blob/master/API.md#Lreject)
  - [L.remove](https://github.com/marpple/FxJS/blob/master/API.md#Lremove)
  - [L.repeat](https://github.com/marpple/FxJS/blob/master/API.md#Lrepeat)
  - [L.reverse](https://github.com/marpple/FxJS/blob/master/API.md#Lreverse)
  - [L.slice](https://github.com/marpple/FxJS/blob/master/API.md#Lslice)
  - [L.splitEvery](https://github.com/marpple/FxJS/blob/master/API.md#LsplitEvery)
  - [L.take](https://github.com/marpple/FxJS/blob/master/API.md#Ltake)
  - [L.takeUntil](https://github.com/marpple/FxJS/blob/master/API.md#LtakeUntil)
  - [L.takeWhile](https://github.com/marpple/FxJS/blob/master/API.md#LtakeWhile)
  - [L.times](https://github.com/marpple/FxJS/blob/master/API.md#Ltimes)
  - [L.union](https://github.com/marpple/FxJS/blob/master/API.md#Lunion)
  - [L.unionBy](https://github.com/marpple/FxJS/blob/master/API.md#LunionBy)
  - [L.unionWith](https://github.com/marpple/FxJS/blob/master/API.md#LunionWith)
  - [L.unique](https://github.com/marpple/FxJS/blob/master/API.md#Lunique)
  - [L.uniqueBy](https://github.com/marpple/FxJS/blob/master/API.md#LuniqueBy)
  - [L.uniqueWith](https://github.com/marpple/FxJS/blob/master/API.md#LuniqueWith)
  - [L.update](https://github.com/marpple/FxJS/blob/master/API.md#Lupdate)
  - [L.updateBy](https://github.com/marpple/FxJS/blob/master/API.md#LupdateBy)
  - [L.values](https://github.com/marpple/FxJS/blob/master/API.md#Lvalues)
  - [L.zip](https://github.com/marpple/FxJS/blob/master/API.md#Lzip)
  - [L.zipWithIndex](https://github.com/marpple/FxJS/blob/master/API.md#LzipWithIndex)
- [Concurrency](https://github.com/marpple/FxJS/blob/master/API.md#concurrency)
  - [C.calls](https://github.com/marpple/FxJS/blob/master/API.md#Ccalls)
  - [C.compact](https://github.com/marpple/FxJS/blob/master/API.md#Ccompact)
  - [C.drop](https://github.com/marpple/FxJS/blob/master/API.md#Cdrop)
  - [C.every](https://github.com/marpple/FxJS/blob/master/API.md#Cevery)
  - [C.filter](https://github.com/marpple/FxJS/blob/master/API.md#Cfilter)
  - [C.find](https://github.com/marpple/FxJS/blob/master/API.md#Cfind)
  - [C.head](https://github.com/marpple/FxJS/blob/master/API.md#Chead)
  - [C.map](https://github.com/marpple/FxJS/blob/master/API.md#Cmap)
  - [C.mapEntries](https://github.com/marpple/FxJS/blob/master/API.md#CmapEntries)
  - [C.object](https://github.com/marpple/FxJS/blob/master/API.md#Cobject)
  - [C.race](https://github.com/marpple/FxJS/blob/master/API.md#Crace)
  - [C.reduce](https://github.com/marpple/FxJS/blob/master/API.md#Creduce)
  - [C.some](https://github.com/marpple/FxJS/blob/master/API.md#Csome)
  - [C.tail](https://github.com/marpple/FxJS/blob/master/API.md#Ctail)
  - [C.take](https://github.com/marpple/FxJS/blob/master/API.md#Ctake)
  - [C.take1](https://github.com/marpple/FxJS/blob/master/API.md#Ctake1)
  - [C.takeAll](https://github.com/marpple/FxJS/blob/master/API.md#CtakeAll)
  - [C.takeRace](https://github.com/marpple/FxJS/blob/master/API.md#CtakeRace)
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

위의 라이브러리들은 FxJS를 기반으로 만들어졌습니다.
FxSQL과 FxDOM은 각각 SQL과 DOM을 함수형 API를 통해 다룰 수 있는 라이브러리 입니다.
