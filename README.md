## FxJS - Functional Extensions for Javascript

ES6+에서 사용하는 함수형 라이브러리

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
- [go](#go)

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
const lazy = L.map(a => a + 10, [1, 2, 3]);
take(2, lazy);
// [11, 12]
```

#### L.filter

```javascript
const lazy = L.filter(a => a % 2, [1, 2, 3, 4, 5]);
take(2, lazy);
// [1, 3]
```

```javascript
const lazy = L.filter(a => a % 2, L.map(a => a + 10, [1, 2, 3, 4, 5]));
take(2, lazy);
// [11, 13]
```

#### go

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