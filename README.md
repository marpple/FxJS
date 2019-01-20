## FxJS - Functional Extensions for Javascript

FxJS는 자바스크립트의 기본 값을 이용하고, 이터러블 프로그래밍과 Promise를 강조한 함수형 프로그래밍 라이브러리입니다.

### iterable

```javascript
const res = go(
  L.range(Infinity),
  L.filter(a => a % 2),
  L.take(3),
  reduce(add));

log(res); // 9
```

### iterable + time

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

### iterable + time + Promise

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

  await go(
    L.interval(1000),
    L.map(a => a + 20),
    L.takeWhile(a => a < 23),
    each(log));
  // 5초 후 20
  // 6초 후 21
  // 7초 후 22
} ());
```

### 설치

```
npm i fxjs2
```

### 목차

- [map](#map)
- [filter](#filter)
- [reduce](#reduce)
- [take](#take)
- [L.map](#L.map)
- [L.filter](#L.filter)
- [go + try catch + 비동기 에러 핸들링](#go--try-catch--비동기-에러-핸들링)
- [stop](#stop)

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

```javascript
const iterator = L.filter(a => a % 2, L.map(a => a + 10, [1, 2, 3, 4, 5]));
take(2, iterator);
// [11, 13]
```

#### go + try catch + 비동기 에러 핸들링

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

### stop

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