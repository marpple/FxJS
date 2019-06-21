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
- [API](#API)
  - [Strict](#Strict)
  - [Lazy](#Lazy)
  - [Concurrency](#Concurrency)
  - [Stoppable](#Stoppable)
- [Change Log](#Change-Log)

## Getting Started

### Installation

#### In Modern Browsers Supporting ES6
- [fx.js](https://github.com/marpple/FxJS/blob/master/dist/fx.js)
- [fx.js.map](https://github.com/marpple/FxJS/blob/master/dist/fx.js.map)
- [fx.min.js](https://github.com/marpple/FxJS/blob/master/dist/fx.min.js)

```html
<script src="path/fx.min.js"></script>
```

#### In Legacy ES5 Browsers
- [fx.es5.js](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.js)
- [fx.es5.js.map](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.js.map)
- [fx.es5.min.js](https://github.com/marpple/FxJS/blob/master/dist/fx.es5.min.js)

```html
<script src="path/fx.es5.min.js"></script>
```

#### Node and npm

Webpack으로 번들링 할 수 있습니다.

```
npm install fxjs2
```

```javascript
const { map, filter, reduce, L, C } = require("fxjs2");
```

```javascript
import { map, filter, reduce, L, C } from "fxjs2";
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

(async () => {
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
} ());
```

### Concurrency

`C` 네임스페이스의 함수를 통해 동시/병렬적인 평가가 가능합니다.

```javascript
await map(getPage, range(1, 6));
// 5초 후
// [page1, page2, page3, page4, page5]

const pages = await C.map(getPage, range(1, 6));
// 1초 후
// [page1, page2, page3, page4, page5]
```

`L` 함수들로 지연해둔 함수열을 `C` 함수로 동시에 평가할 수도 있습니다. 이런 방식은 Clojure의 Reducers와 비슷합니다.

```javascript
go(
  range(1, 6),
  map(getPage),
  filter(page => page.line > 50),
  map(getWords),
  flat,
  countBy(identity));
// 5초 후
// { html: 78, css: 36, is: 192 ... }

go(
  L.range(1, 6),
  L.map(getPage),
  L.filter(page => page.line > 50),
  L.map(getWords),
  L.flat,
  C.takeAll,
  countBy(identity));
// 1초 후
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

- [Strict evaluation](#strict-evaluation)
  - [map](#map)
  - [filter](#filter)
  - [reduce](#reduce)
  - [take](#take)
- [Lazy evaluation](#lazy-evaluation)
  - [L.map](#L.map)
  - [L.filter](#L.filter)
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

### Strict

#### map

```javascript
map(a => a + 10, [1, 2, 3]);
// [11, 12, 13]
```

#### filter

```javascript
filter(a => a % 2, [1, 2, 3]);
// [1, 3]
```

#### reduce

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

#### take

```javascript
take(1, [1, 2, 3]);
// [1]

take(2, [1, 2, 3])
// [1, 2]
```

### Lazy

#### L.map

```javascript
const iterator = L.map(a => a + 10, [1, 2, 3]);
take(2, iterator);
// [11, 12]
```

#### L.filter

```javascript
const iterator = L.filter(a => a % 2, [1, 2, 3, 4, 5]);
take(2, iterator);
// [1, 3]
```

### Concurrency

#### C.calls
#### C.takeAll
#### C.takeRace
#### C.race
#### C.map
#### C.mapEntries
#### C.filter
#### C.compact
#### C.reduce
#### C.take
#### C.drop
#### C.take1
#### C.head
#### C.tail
#### C.find
#### C.every
#### C.some

### Stoppable

#### reduceS, stop

```javascript
reduceS((a, b) => {
 const res = a + b;
 return res > 5 ? stop(res) : res;
}, [1, 2, 3, 4]);
// 6
```

#### goS, pipeS, stop, stopIf

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