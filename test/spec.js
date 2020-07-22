import { expect } from "chai";
import * as C from "../Concurrency/index.js";
import * as L from "../Lazy/index.js";
import {
  add,
  both,
  callEach,
  chunk,
  clone,
  cond,
  constant,
  curry2,
  curry3,
  curryN,
  deepFlat,
  deepFlatten,
  delay,
  difference,
  differenceBy,
  differenceWith,
  divide,
  dropRight,
  dropUntil,
  dropWhile,
  each,
  either,
  equals,
  equalsBy,
  every,
  evolve,
  find,
  findIndex,
  flat,
  flatMap,
  fork,
  go,
  go1,
  goS,
  gt,
  html,
  identity,
  ifElse,
  includes,
  initial,
  insert,
  intersection,
  intersectionBy,
  intersectionWith,
  invert,
  invertBy,
  isEmpty,
  join,
  lt,
  map,
  mapObject,
  mean,
  merge,
  blockUntilSettled,
  omit,
  omitBy,
  partition,
  pick,
  pickBy,
  pipe,
  pipeS,
  promiseAllEntries,
  promiseAllObject,
  range,
  reduce,
  reduceRight,
  reduceS,
  remove,
  repeat,
  replace,
  rest,
  satisfiesEvery,
  satisfiesSome,
  sel,
  selEquals,
  selSatisfies,
  slice,
  some,
  splitEvery,
  stop,
  stopIf,
  sum,
  sumBy,
  take,
  takeAll,
  takeUntil,
  takeWhile,
  times,
  toIter,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqWith,
  unzip,
  update,
  updateBy,
  zip,
  zipObj,
  zipWith,
} from "../Strict/index.js";

(function () {
  describe("curry", function () {
    it("curry2", function () {
      const addAll = curry2((...args) => args.reduce(add));
      expect(addAll(1)(2)(3)).to.eql(6);
      expect(addAll(1)(2)(3, 4)).to.eql(10);
      expect(addAll(1)(2, 3)).to.eql(6);
      expect(addAll(1)(2, 3, 4)).to.eql(10);
      expect(addAll(1, 2)(3)).to.eql(6);
      expect(addAll(1, 2)(3, 4)).to.eql(10);
      expect(addAll(1, 2, 3)).to.eql(6);
      expect(addAll(1, 2, 3, 4)).to.eql(10);
    });

    it("curry3", function () {
      const addAll = curry3((...args) => args.reduce(add));
      expect(addAll(1)(2, 3)(4)).to.eql(10);
      expect(addAll(1)(2, 3)(4, 5)).to.eql(15);
      expect(addAll(1)(2, 3, 4)).to.eql(10);
      expect(addAll(1)(2, 3, 4, 5)).to.eql(15);
      expect(addAll(1)(2)(3, 4)).to.eql(10);
      expect(addAll(1)(2)(3, 4, 5)).to.eql(15);
      expect(addAll(1)(2)(3)(4)).to.eql(10);
      expect(addAll(1)(2)(3)(4, 5)).to.eql(15);
      expect(addAll(1, 2)(3)(4)).to.eql(10);
      expect(addAll(1, 2)(3)(4, 5)).to.eql(15);
      expect(addAll(1, 2)(3, 4)).to.eql(10);
      expect(addAll(1, 2)(3, 4, 5)).to.eql(15);
      expect(addAll(1, 2, 3)(4)).to.eql(10);
      expect(addAll(1, 2, 3)(4, 5)).to.eql(15);
      expect(addAll(1, 2, 3, 4)).to.eql(10);
      expect(addAll(1, 2, 3, 4, 5)).to.eql(15);
    });

    it("curryN", function () {
      const addAll = curryN(3, (...args) => args.reduce(add));
      expect(addAll(1)(2, 3)(4)).to.eql(10);
      expect(addAll(1)(2, 3)(4, 5)).to.eql(15);
      expect(addAll(1)(2, 3, 4)).to.eql(10);
      expect(addAll(1)(2, 3, 4, 5)).to.eql(15);
      expect(addAll(1)(2)(3, 4)).to.eql(10);
      expect(addAll(1)(2)(3, 4, 5)).to.eql(15);
      expect(addAll(1)(2)(3)(4)).to.eql(10);
      expect(addAll(1)(2)(3)(4, 5)).to.eql(15);
      expect(addAll(1, 2)(3)(4)).to.eql(10);
      expect(addAll(1, 2)(3)(4, 5)).to.eql(15);
      expect(addAll(1, 2)(3, 4)).to.eql(10);
      expect(addAll(1, 2)(3, 4, 5)).to.eql(15);
      expect(addAll(1, 2, 3)(4)).to.eql(10);
      expect(addAll(1, 2, 3)(4, 5)).to.eql(15);
      expect(addAll(1, 2, 3, 4)).to.eql(10);
      expect(addAll(1, 2, 3, 4, 5)).to.eql(15);
    });
  });

  describe("C.race", function () {
    it("C.takeRace(1, iter)", async () => {
      expect(
        await C.race(L.map((a) => delay(a, a), [100, 50, 200, 70, 300, 80]))
      ).to.eql(50);
      expect(
        await C.race(
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(a, a), [
              100,
              101,
              50,
              51,
              200,
              201,
              70,
              71,
              300,
              301,
              80,
              81,
            ])
          )
        )
      ).to.eql(51);
    });
    it("C.takeRace(1, iter) error", async () => {
      try {
        await C.takeRace(
          1,
          L.map(async (a) => delay(a, await Promise.reject(a)), [
            100,
            50,
            200,
            70,
            300,
            80,
          ])
        );
        expect(1).to.eql(2);
      } catch (e) {}
      try {
        expect(
          await C.race(
            L.filter(
              (a) => asdad,
              L.map((a) => delay(a, a), [
                100,
                101,
                50,
                51,
                200,
                201,
                70,
                71,
                300,
                301,
                80,
                81,
              ])
            )
          )
        ).to.eql(51);
        expect(1).to.eql(2);
      } catch (e) {}
    });
  });

  describe("C.takeRace", function () {
    it("C.takeRace(1, iter)", async () => {
      expect(
        await C.takeRace(
          1,
          L.map((a) => delay(a, a), [100, 50, 200, 70, 300, 80])
        )
      ).to.eql([50]);
      expect(
        await C.takeRace(
          1,
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(a, a), [
              100,
              101,
              50,
              51,
              200,
              201,
              70,
              71,
              300,
              301,
              80,
              81,
            ])
          )
        )
      ).to.eql([51]);
    });
    it("C.takeRace(2, iter)", async () => {
      expect(
        await C.takeRace(
          2,
          L.map((a) => delay(a, a), [100, 50, 200, 70, 300, 80])
        )
      ).to.eql([50, 70]);
      expect(
        await C.takeRace(
          2,
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(a, a), [
              100,
              101,
              50,
              51,
              200,
              201,
              70,
              71,
              300,
              301,
              80,
              81,
            ])
          )
        )
      ).to.eql([51, 71]);
    });
    it("C.takeRace(3, iter)", async () => {
      expect(
        await C.takeRace(
          3,
          L.map((a) => delay(a, a), [100, 50, 200, 70, 300, 80])
        )
      ).to.eql([50, 70, 80]);
      expect(
        await C.takeRace(
          3,
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(a, a), [
              100,
              101,
              50,
              51,
              200,
              201,
              70,
              71,
              300,
              301,
              80,
              81,
            ])
          )
        )
      ).to.eql([51, 71, 81]);
    });
  });

  describe("C.takeAll", function () {
    it("C.takeAll(iter)", async () => {
      expect(
        await C.takeAll(
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(500, a), L.range(20))
          )
        )
      ).to.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    }).timeout(600);
    it("C.takeAll(10, iter)", async () => {
      expect(
        await C.takeAll(
          10,
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(500, a), L.range(20))
          )
        )
      ).to.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    }).timeout(1100);
    it("C.takeAll(5, iter)", async () => {
      expect(
        await C.takeAll(
          5,
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(500, a), L.range(20))
          )
        )
      ).to.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    }).timeout(2100);
    it("C.takeAll(5)(iter) Currying", async () => {
      expect(
        await C.takeAll(5)(
          L.filter(
            (a) => a % 2,
            L.map((a) => delay(500, a), L.range(20))
          )
        )
      ).to.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    }).timeout(2100);
    it("C.takeAll Infinity", async () => {
      expect(await C.takeAll(L.range(5))).to.eql([0, 1, 2, 3, 4]);
      expect(await C.takeAll(Infinity, L.range(5))).to.eql([0, 1, 2, 3, 4]);
    }).timeout(600);
    it("C.takeAll Infinity 2", async () => {
      expect(await reduce((a, b) => a + b, L.limitLoad(L.range(5)))).to.eql(10);
      expect(
        await reduce((a, b) => a + b, L.limitLoad(Infinity, L.range(5)))
      ).to.eql(10);
    }).timeout(600);
  });

  describe("L.take + C.takeAll", function () {
    it("L.take + takeAll", () => {
      expect(
        takeAll(
          L.take(
            2,
            L.map((a) => a, [1, 2, 3])
          )
        )
      ).to.eql([1, 2]);
    });
    it("Promise + L.take + takeAll", async () => {
      expect(
        await takeAll(
          L.take(
            2,
            L.map((a) => Promise.resolve(a), [1, 2, 3])
          )
        )
      ).to.eql([1, 2]);
    });
    it("Promise + L.take + L.filter + takeAll", async () => {
      expect(
        await takeAll(
          L.take(
            2,
            L.filter(
              (a) => a % 2,
              L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5, 6])
            )
          )
        )
      ).to.eql([1, 3]);
    });
    it("Promise + L.take + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.take(
            2,
            L.map((a) => delay(a, a), [601, 500, 401, 300, 201, 100, 51, 30])
          )
        )
      ).to.eql([601, 500]);
    });
    it("Promise + L.take + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.take(
            2,
            L.filter(
              (a) => a % 2,
              L.map((a) => delay(a, a), [601, 500, 401, 300, 201, 100, 51, 31])
            )
          )
        )
      ).to.eql([601, 401]);
    });
  });

  describe("L.takeWhile + C.takeAll", function () {
    it("L.takeWhile + takeAll", () => {
      expect(
        takeAll(
          L.takeWhile(
            (a) => a < 3,
            L.map((a) => a, [1, 2, 3])
          )
        )
      ).to.eql([1, 2]);
    });
    it("Promise + L.takeWhile + takeAll", async () => {
      expect(
        await takeAll(
          L.takeWhile(
            (a) => a < 3,
            L.map((a) => Promise.resolve(a), [1, 2, 3])
          )
        )
      ).to.eql([1, 2]);
    });
    it("Promise + L.takeWhile + L.filter + takeAll", async () => {
      expect(
        await takeAll(
          L.takeWhile(
            (a) => a < 4,
            L.filter(
              (a) => a % 2,
              L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5, 6])
            )
          )
        )
      ).to.eql([1, 3]);
    });
    it("Promise + L.takeWhile + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.takeWhile(
            (a) => a > 401,
            L.map((a) => delay(a, a), [601, 500, 401, 300, 201, 100, 51, 30])
          )
        )
      ).to.eql([601, 500]);
    });
    it("Promise + L.takeWhile + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.takeWhile(
            (a) => a > 300,
            L.filter(
              (a) => a % 2,
              L.map((a) => delay(a, a), [601, 500, 401, 300, 201, 100, 51, 31])
            )
          )
        )
      ).to.eql([601, 401]);
    });
  });

  describe("L.takeUntil + C.takeAll", function () {
    it("L.takeUntil + takeAll", () => {
      expect(
        takeAll(
          L.takeUntil(
            (a) => a == 2,
            L.map((a) => a, [1, 2, 3])
          )
        )
      ).to.eql([1, 2]);
    });
    it("Promise + L.takeUntil + takeAll", async () => {
      expect(
        await takeAll(
          L.takeUntil(
            (a) => a == 2,
            L.map((a) => Promise.resolve(a), [1, 2, 3])
          )
        )
      ).to.eql([1, 2]);
    });
    it("Promise + L.takeUntil + L.filter + takeAll", async () => {
      expect(
        await takeAll(
          L.takeUntil(
            (a) => a == 3,
            L.filter(
              (a) => a % 2,
              L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5, 6])
            )
          )
        )
      ).to.eql([1, 3]);
    });
    it("Promise + L.takeUntil + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.takeUntil(
            (a) => a < 600,
            L.map((a) => delay(a, a), [601, 500, 401, 300, 201, 100, 51, 30])
          )
        )
      ).to.eql([601, 500]);
    });
    it("Promise + L.takeUntil + L.filter + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.takeUntil(
            (a) => a < 600,
            L.filter(
              (a) => a % 2,
              L.map((a) => delay(a, a), [601, 500, 401, 300, 201, 100, 51, 31])
            )
          )
        )
      ).to.eql([601, 401]);
    });
  });

  describe("each", function () {
    it("each", async () => {
      let i = 0;
      expect(
        each((a) => {
          expect(a).to.eql(i++);
        }, [0, 1, 2, 3][Symbol.iterator]())
      ).to.eql([0, 1, 2, 3]);
    });
  });

  describe("flatMap", function () {
    it("(a => Promise [Promise b]) => Iterable Promise a => Promise [b]", async () => {
      expect(flatMap((a) => range(a), [1, 2])).to.eql([0, 0, 1]);
      expect(await flatMap((a) => Promise.resolve([a + 1]), [1])).to.eql([2]);
      expect(
        await flatMap((a) => Promise.resolve([Promise.resolve(a + 1)]), [1])
      ).to.eql([2]);
    });
  });

  describe("html", function () {
    it("html", async () => {
      expect(html`a${"b"}c${"d"}${undefined}e`).to.eql("abcde");
      expect(
        await html`a${Promise.resolve("b")}c${Promise.resolve(
          "d"
        )}${Promise.resolve(undefined)}e`
      ).to.eql("abcde");
    });
  });

  describe("pick", function () {
    it("pick([], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(pick([], { a: 1, b: 2, c: 3, d: 4 })).to.eql({});
    });
    it("pick(['a', 'c'], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(pick(["a", "c"], { a: 1, b: 2, c: 3, d: 4 })).to.eql({
        a: 1,
        c: 3,
      });
    });
    it("pick(['a', 'cc'], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(pick(["a", "cc"], { a: 1, b: 2, c: 3, d: 4 })).to.eql({ a: 1 });
    });
    it("pick(['aa', 'cc'], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(pick(["aa", "cc"], { a: 1, b: 2, c: 3, d: 4 })).to.eql({});
    });
  });

  describe("pickBy", function () {
    it("pickBy(_ => false, {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(pickBy((_) => false, { a: 1, b: 2, c: 3, d: 4 })).to.eql({});
    });
    it("pickBy(([k]) => k === 'a' || k === 'c', {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(
        pickBy(([k]) => k === "a" || k === "c", { a: 1, b: 2, c: 3, d: 4 })
      ).to.eql({ a: 1, c: 3 });
    });
    it("pickBy(([_, v]) => v % 2 === 0, {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(
        pickBy(([_, v]) => v % 2 === 0, { a: 1, b: 2, c: 3, d: 4 })
      ).to.eql({ b: 2, d: 4 });
    });
  });

  describe("omit", function () {
    it("omit([], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(omit([], { a: 1, b: 2, c: 3, d: 4 })).to.eql({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      });
    });
    it("omit(['a', 'c'], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(omit(["a", "c"], { a: 1, b: 2, c: 3, d: 4 })).to.eql({
        b: 2,
        d: 4,
      });
    });
    it("omit(['a', 'cc'], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(omit(["a", "cc"], { a: 1, b: 2, c: 3, d: 4 })).to.eql({
        b: 2,
        c: 3,
        d: 4,
      });
    });
    it("omit(['aa', 'cc'], {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(omit(["aa", "cc"], { a: 1, b: 2, c: 3, d: 4 })).to.eql({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      });
    });
  });

  describe("omitBy", function () {
    it("omitBy(_ => true, {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(omitBy((_) => true, { a: 1, b: 2, c: 3, d: 4 })).to.eql({});
    });
    it("omitBy(([k]) => k === 'b' || k === 'd', {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(
        omitBy(([k]) => k === "b" || k === "d", { a: 1, b: 2, c: 3, d: 4 })
      ).to.eql({ a: 1, c: 3 });
    });
    it("omitBy(([_, v]) => v % 2, {a: 1, b: 2, c: 3, d: 4})", function () {
      expect(omitBy(([_, v]) => v % 2, { a: 1, b: 2, c: 3, d: 4 })).to.eql({
        b: 2,
        d: 4,
      });
    });
  });

  describe("drop", function () {
    it("L.drop", () => {
      expect(takeAll(L.drop(1, [1, 2, 3, 4, 5]))).to.eql([2, 3, 4, 5]);
      expect(takeAll(L.drop(2, [1, 2, 3, 4, 5]))).to.eql([3, 4, 5]);
      expect(takeAll(L.drop(4, [1, 2, 3, 4, 5]))).to.eql([5]);
      expect(takeAll(L.drop(5, [1, 2, 3, 4, 5]))).to.eql([]);
      expect(takeAll(L.drop(6, [1, 2, 3, 4, 5]))).to.eql([]);
    });
    it("L.drop promise", async () => {
      expect(
        await takeAll(
          L.drop(
            1,
            L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
          )
        )
      ).to.eql([2, 3, 4, 5]);
      expect(
        await takeAll(
          L.drop(
            2,
            L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
          )
        )
      ).to.eql([3, 4, 5]);
      expect(
        await takeAll(
          L.drop(
            4,
            L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
          )
        )
      ).to.eql([5]);
      expect(
        await takeAll(
          L.drop(
            5,
            L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
          )
        )
      ).to.eql([]);
      expect(
        await takeAll(
          L.drop(
            6,
            L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
          )
        )
      ).to.eql([]);
    });
    it("Promise + L.drop + L.filter + takeAll", async () => {
      expect(
        await takeAll(
          L.drop(
            1,
            L.filter(
              (a) => a % 2,
              L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5, 6])
            )
          )
        )
      ).to.eql([3, 5]);
    });

    it("Promise + L.drop + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.drop(
            2,
            L.map((a) => delay(a, a), [601, 500, 401, 300])
          )
        )
      ).to.eql([401, 300]);
    });
    it("Promise + L.drop + L.filter + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.drop(
            1,
            L.filter(
              (a) => a % 2,
              L.map((a) => delay(a, a), [601, 500, 401, 300, 201, 100])
            )
          )
        )
      ).to.eql([401, 201]);
    });
    it("C.drop", async () => {
      expect(
        await C.drop(
          1,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([2, 3, 4, 5]);
      expect(
        await C.drop(
          2,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([3, 4, 5]);
      expect(
        await C.drop(
          4,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([5]);
      expect(
        await C.drop(
          5,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([]);
      expect(
        await C.drop(
          6,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([]);
    });
  });

  describe("dropWhile", function () {
    it("L.dropWhile", () => {
      expect(takeAll(L.dropWhile((a) => a % 2, [1, 1, 2, 2, 3, 3]))).to.eql([
        2,
        2,
        3,
        3,
      ]);
      expect(takeAll(L.dropWhile((a) => a < 1, [1, 1, 2, 2, 3, 3]))).to.eql([
        1,
        1,
        2,
        2,
        3,
        3,
      ]);
      expect(takeAll(L.dropWhile((a) => a < 2, [1, 1, 2, 2, 3, 3]))).to.eql([
        2,
        2,
        3,
        3,
      ]);
      expect(takeAll(L.dropWhile((a) => a < 3, [1, 1, 2, 2, 3, 3]))).to.eql([
        3,
        3,
      ]);
    });

    it("L.dropWhile promise", async () => {
      expect(
        await takeAll(
          L.dropWhile((a) => Promise.resolve(a % 2), [1, 1, 2, 2, 3, 3])
        )
      ).to.eql([2, 2, 3, 3]);

      expect(
        await takeAll(
          L.dropWhile((a) => Promise.resolve(a % 2), [
            1,
            Promise.resolve(1),
            2,
            2,
            3,
            3,
          ])
        )
      ).to.eql([2, 2, 3, 3]);
    });

    it("Promise + L.dropWhile + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.dropWhile(
            (a) => Promise.resolve(a % 2),
            L.map((a) => delay(a, a), [601, 501, 400, 300])
          )
        )
      ).to.eql([400, 300]);
    });

    it("Promise + L.dropWhile + L.filter + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.dropWhile(
            (a) => Promise.resolve(a > 100),
            L.filter(
              (a) => a % 2,
              L.map((a) => delay(a, a), [
                601,
                500,
                401,
                300,
                201,
                100,
                91,
                80,
                71,
                60,
              ])
            )
          )
        )
      ).to.eql([91, 71]);
    });

    it("dropWhile promise", async () => {
      expect(
        await dropWhile(
          (a) => Promise.resolve(a % 2),
          Promise.resolve([1, Promise.resolve(1), 2, 2, 3, Promise.resolve(3)])
        )
      ).to.eql([2, 2, 3, 3]);
    });
  });

  describe("dropUntil", function () {
    it("L.dropUntil", () => {
      expect(takeAll(L.dropUntil((a) => a % 2, [1, 1, 2, 2, 3, 3]))).to.eql([
        1,
        2,
        2,
        3,
        3,
      ]);
      expect(takeAll(L.dropUntil((a) => a % 2, [2, 2, 3, 3]))).to.eql([3]);
      expect(takeAll(L.dropUntil((a) => a % 2, [2, 2, 4, 4]))).to.eql([]);
    });

    it("L.dropUntil promise", async () => {
      expect(
        await takeAll(L.dropUntil((a) => Promise.resolve(a % 2), [2, 2, 3, 3]))
      ).to.eql([3]);

      expect(
        await takeAll(
          L.dropUntil((a) => Promise.resolve(a % 2), [
            2,
            Promise.resolve(2),
            3,
            Promise.resolve(3),
          ])
        )
      ).to.eql([3]);
    });

    it("Promise + L.dropUntil + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.dropUntil(
            (a) => Promise.resolve(a % 2),
            L.map((a) => delay(a, a), [600, 501, 401, 300])
          )
        )
      ).to.eql([401, 300]);
    });

    it("Promise + L.dropUntil + L.filter + C.takeAll", async () => {
      expect(
        await C.takeAll(
          L.dropUntil(
            (a) => Promise.resolve(a < 300),
            L.filter(
              (a) => a % 2,
              L.map((a) => delay(a, a), [
                601,
                500,
                401,
                300,
                201,
                100,
                91,
                80,
                71,
                60,
              ])
            )
          )
        )
      ).to.eql([91, 71]);
    });

    it("dropUntil promise", async () => {
      expect(
        await dropUntil((a) => Promise.resolve(a % 2), [
          2,
          Promise.resolve(2),
          3,
          Promise.resolve(3),
        ])
      ).to.eql([3]);
    });
  });

  describe("dropRight", function () {
    it("dropRight", () => {
      expect(dropRight(1, [1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4]);
      expect(dropRight(2, [1, 2, 3, 4, 5])).to.eql([1, 2, 3]);
      expect(dropRight(4, [1, 2, 3, 4, 5])).to.eql([1]);
      expect(dropRight(5, [1, 2, 3, 4, 5])).to.eql([]);
      expect(dropRight(6, [1, 2, 3, 4, 5])).to.eql([]);
    });
    it("dropRight promise", async () => {
      expect(
        await dropRight(
          1,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([1, 2, 3, 4]);
      expect(
        await dropRight(
          2,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([1, 2, 3]);
      expect(
        await dropRight(
          4,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([1]);
      expect(
        await dropRight(
          5,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([]);
      expect(
        await dropRight(
          6,
          L.map((a) => Promise.resolve(a), [1, 2, 3, 4, 5])
        )
      ).to.eql([]);
    });
  });

  describe("range", function () {
    it("L.range(0)", () => {
      expect([...L.range(0)]).to.eql([]);
    });
    it("L.range(3)", () => {
      expect([...L.range(3)]).to.eql([0, 1, 2]);
    });
    it("L.range(1, 3)", () => {
      expect([...L.range(1, 3)]).to.eql([1, 2]);
    });
    it("L.range(-1, 2)", () => {
      expect([...L.range(-1, 2)]).to.eql([-1, 0, 1]);
    });
    it("L.range(0, 7, 2)", () => {
      expect([...L.range(0, 7, 2)]).to.eql([0, 2, 4, 6]);
    });
    it("L.range(1, 7, 2)", () => {
      expect([...L.range(1, 7, 2)]).to.eql([1, 3, 5]);
    });
    it("L.range(-4)", () => {
      expect([...L.range(-4)]).to.eql([0, -1, -2, -3]);
    });
    it("L.range(0, -4, -1)", () => {
      expect([...L.range(0, -4, -1)]).to.eql([0, -1, -2, -3]);
    });
  });

  describe("remove", function () {
    it("remove with index", function () {
      expect(remove(0, L.range(5))).to.eql([1, 2, 3, 4]);
    });

    it("remove with negative index -2", function () {
      expect(remove(-2, L.range(5))).to.eql([0, 1, 2, 4]);
      expect(remove(-1, L.range(5))).to.eql([0, 1, 2, 3]);
    });

    it("remove with count", function () {
      expect(remove(1, -Infinity, L.range(5))).to.eql([0, 1, 2, 3, 4]);
      expect(remove(1, 2, L.range(5))).to.eql([0, 3, 4]);
      expect(remove(1, Infinity, L.range(5))).to.eql([0]);
    });

    it("remove with negative index and count", function () {
      expect(remove(-4, -Infinity, L.range(5))).to.eql([0, 1, 2, 3, 4]);
      expect(remove(-4, 2, L.range(5))).to.eql([0, 3, 4]);
      expect(remove(-4, Infinity, L.range(5))).to.eql([0]);
    });
  });

  describe("selEquals", function () {
    const dh = { name: "dh", age: 27, company: { name: "marpple" } };
    it("selEquals 1 depth", function () {
      expect(selEquals("name", "dh", dh)).to.eql(true);
    });

    it("selEquals 2 depth", function () {
      expect(selEquals("company.name", "marpple", dh)).to.eql(true);
    });
  });

  describe("selSatisfies", function () {
    const dh = { name: "dh", age: 27 };
    it("#1", function () {
      expect(selSatisfies((age) => age === 27, "age", dh)).to.eql(true);
    });
  });

  describe("slice", function () {
    it("slice with index 0", function () {
      const iter = L.range(5);
      expect(slice(0, iter)).to.eql([0, 1, 2, 3, 4]);
    });

    it("slice with index 2", function () {
      const iter = L.range(5);
      expect(slice(2, iter)).to.eql([2, 3, 4]);
    });

    it("slice with negative index -2", function () {
      const iter = L.range(5);
      expect(slice(-2, iter)).to.eql([3, 4]);
    });

    it("slice with negative index -1", function () {
      const iter = L.range(5);
      expect(slice(-1, iter)).to.eql([4]);
    });

    it("slice with range", function () {
      const iter = L.range(5);
      expect(slice(1, 3, iter)).to.eql([1, 2]);
    });

    it("slice with negative range", function () {
      const iter = L.range(5);
      expect(slice(-4, 3, iter)).to.eql([1, 2]);
    });
  });

  describe("flatten, deepFlatten", function () {
    it("flat([[], [], []])", () => {
      expect(flat([[], [], []])).to.eql([]);
    });

    it("flat([Promise.resolve([], [], [])])", async () => {
      expect(await flat([Promise.resolve([], [], [])])).to.eql([]);
    });

    it("flat([Promise.resolve([]), [], Promise.resolve([])])", async () => {
      expect(await flat([Promise.resolve([]), [], Promise.resolve([])])).to.eql(
        []
      );
    });

    it("flat([0, [1, [2], 3], 4, [5, [6], 7], 8])", () => {
      expect(flat([0, [1, [2], 3], 4, [5, [6], 7], 8])).to.eql([
        0,
        1,
        [2],
        3,
        4,
        5,
        [6],
        7,
        8,
      ]);
    });

    it("flat([0, Promise.resolve([1, [2, 3], 4]), Promise.resolve(5)])", async () => {
      expect(
        await flat([0, Promise.resolve([1, [2, 3], 4]), Promise.resolve(5)])
      ).to.eql([0, 1, [2, 3], 4, 5]);
    });

    it("flat([0, [1, Promise.resolve([2, 3]), 4], 5])", async () => {
      expect(
        await flat([0, [1, Promise.resolve([2, 3]), 4], Promise.resolve(5)])
      ).to.eql([0, 1, [2, 3], 4, 5]);
    });

    it('flat([Promise.resolve("01"), "23", [Promise.resolve(["45"]), "67"], "89"])', async () => {
      expect(
        await flat([
          Promise.resolve("01"),
          "23",
          [Promise.resolve(["45"]), "67"],
          "89",
        ])
      ).to.eql(["01", "23", ["45"], "67", "89"]);
    });

    it("deepFlat([[[]]])", () => {
      expect(deepFlat([[[]]])).to.eql([]);
    });
    it("deepFlat([0, Promise.resolve([1, Promise.resolve([2, 3]), 4]), Promise.resolve(5), 6])", async () => {
      expect(
        await deepFlat([
          0,
          Promise.resolve([1, Promise.resolve([2, 3]), 4]),
          Promise.resolve(5),
          6,
        ])
      ).to.eql([0, 1, 2, 3, 4, 5, 6]);
    });
  });

  describe("take", function () {
    it("take(1, [1, 2, 3])", () => {
      expect(take(1, [1, 2, 3])).to.eql([1]);
    });
    it("take(2, [1, 2, 3])", () => {
      expect(take(2, [1, 2, 3])).to.eql([1, 2]);
    });

    it("take(2, L.map(a => a + 1, [1, 2, 3]))", () => {
      expect(
        take(
          2,
          L.map((a) => a + 1, [1, 2, 3])
        )
      ).to.eql([2, 3]);
    });

    it("take(2, L.filter(a => a % 2, [1, 2, 3, 4, 5]))", () => {
      expect(
        take(
          2,
          L.filter((a) => a % 2, [1, 2, 3, 4, 5])
        )
      ).to.eql([1, 3]);
    });

    it("take(2, L.map(a => Promise.resolve(a + 1), [1, 2, 3]))", () => {
      go1(
        take(
          2,
          L.map((a) => Promise.resolve(a + 1), [1, 2, 3])
        ),
        (_) => expect(_).to.eql([2, 3])
      );
    });

    it("take(2, L.filter(a => Promise.resolve(a % 2), [1, 2, 3, 4, 5]))", () => {
      go1(
        take(
          2,
          L.filter((a) => Promise.resolve(a % 2), [1, 2, 3])
        ),
        (_) => expect(_).to.eql([1, 3])
      );
    });

    it("takeWhile", async () => {
      expect(takeWhile((a) => a, [1, 2, 0, 4])).to.eql([1, 2]);

      expect(
        await go(
          L.range(Infinity),
          L.map((a) => Promise.resolve(a)),
          takeWhile((a) => a < 3)
        )
      ).to.eql([0, 1, 2]);
    });

    it("takeUntil", async () => {
      expect(takeUntil((a) => a, [1, 2, 0, 4])).to.eql([1]);
      expect(takeUntil((a) => !a, [1, 2, 0, 4])).to.eql([1, 2, 0]);

      expect(
        await go(
          L.range(Infinity),
          L.map((a) => Promise.resolve(a)),
          takeUntil((a) => a > 3)
        )
      ).to.eql([0, 1, 2, 3, 4]);
    });

    it("takeUntil, L.flat", async () => {
      expect(
        await go(
          L.range(Infinity),
          L.map((a) => Promise.resolve([a, a])),
          L.flat,
          takeUntil((_, res) => res.length == 7)
        )
      ).to.eql([0, 0, 1, 1, 2, 2, 3]);
    });
  });

  describe("times", function () {
    it("times(String, 3)", () => {
      expect(times(String, 3)).to.eql(["0", "1", "2"]);
    });

    it("times(Promise.resolve.bind(Promise), 3)", async () => {
      expect(await times(Promise.resolve.bind(Promise), 3)).to.eql([0, 1, 2]);
    });
  });

  describe("reduce", function () {
    const add = (a, b) => a + b;
    it("reduce(add, [1, 2, 3])", () => {
      expect(reduce(add, [1, 2, 3])).to.eql(6);
    });
    it("reduce(add, 10, [1, 2, 3])", () => {
      expect(reduce(add, 10, [1, 2, 3])).to.eql(16);
    });
    it("reduce(add, L.values({a: 1, b: 2, c: 3}))", () => {
      expect(reduce(add, L.values({ a: 1, b: 2, c: 3 }))).to.eql(6);
    });
    it("reduce(add, [Promise.resolve(1), 2, 3])", () => {
      go1(reduce(add, [Promise.resolve(1), 2, 3]), (_) => expect(_).to.eql(6));
    });
    it("reduce(add, L.filter(a => a % 2, [1, 2, 3, 4]))", () => {
      expect(
        reduce(
          add,
          L.filter((a) => a % 2, [1, 2, 3, 4])
        )
      ).to.eql(4);
    });
    it("reduce(add, L.filter(a => Promise.resolve(a % 2), [1, 2, 3, 4]))", () => {
      go1(
        reduce(
          add,
          L.filter((a) => Promise.resolve(a % 2), [1, 2, 3, 4])
        ),
        (_) => expect(_).to.eql(4)
      );
    });
    it("reduce(add, L.filter(a => Promise.resolve(a % 2), L.map(a => a + 10, [1, 2, 3, 4])))", () => {
      go1(
        reduce(
          add,
          L.filter(
            (a) => Promise.resolve(a % 2),
            L.map((a) => a + 10, [1, 2, 3, 4])
          )
        ),
        (_) => expect(_).to.eql(24)
      );
    });
    it("reduce(add, L.filter(a => Promise.resolve(a % 2), L.map(a => Promise.resolve(a + 10), [1, 2, 3, 4])))", () => {
      go1(
        reduce(
          add,
          L.filter(
            (a) => Promise.resolve(a % 2),
            L.map((a) => Promise.resolve(a + 10), [1, 2, 3, 4])
          )
        ),
        (_) => expect(_).to.eql(24)
      );
    });
  });

  describe("reduceRight", function () {
    it("2 arguments", () => {
      expect(reduceRight((a, b) => a - b, [1, 2, 3, 4])).to.eql(-2);
    });

    it("3 arguments", () => {
      expect(reduceRight((a, b) => a - b, 0, [1, 2, 3, 4])).to.eql(-10);
    });
  });

  describe("C.take", function () {
    function delay(val, time = 1000) {
      return new Promise((resolve) => setTimeout((_) => resolve(val), time));
    }

    it("C.take(2, L.map(a => delay(a, a * 100), [1, 2, 3]))", () => {
      go1(
        C.take(
          2,
          L.map((a) => delay(a, 100), [1, 2, 3])
        ),
        (_) => expect(_).to.eql([1, 2])
      );
    });

    it("C.take(2, L.filter(a => delay(a % 2, a * 100), [1, 2, 3]))", () => {
      go1(
        C.take(
          2,
          L.filter((a) => delay(a % 2, 100), [1, 2, 3])
        ),
        (_) => expect(_).to.eql([1, 3])
      );
    });
  });

  describe("map", function () {
    function delay(val, time = 1000) {
      return new Promise((resolve) => setTimeout((_) => resolve(val), time));
    }

    it("map(a => delay(a+10, 1000), [1, 2, 3])", async function () {
      expect(await map((a) => a + 10, [Promise.resolve(1), 2, 3])).to.eql([
        11,
        12,
        13,
      ]);
    });

    it("map(a => delay(a+10, 1000), [1, 2, 3])", async function () {
      expect(await map((a) => delay(a + 10, 1000), [1, 2, 3])).to.eql([
        11,
        12,
        13,
      ]);
    }).timeout(5000);

    it("C.map(a => delay(a+10, 1000), [1, 2, 3])", async function () {
      expect(await C.map((a) => delay(a + 10, 1000), [1, 2, 3])).to.eql([
        11,
        12,
        13,
      ]);
    }).timeout(1500);
  });

  describe("find", function () {
    it("find(a => a > 1, [1, 2, 3])", function () {
      expect(find((a) => a > 1, [1, 2, 3])).to.eql(2);
    });

    it("some(a => a > 1, [1, 2, 3])", function () {
      expect(some((a) => a > 1, [1, 2, 3])).to.eql(true);
    });

    it("some(a => a > 10, [1, 2, 3])", function () {
      expect(some((a) => a > 10, [1, 2, 3])).to.eql(false);
    });

    it("some(a => a > 1, [])", function () {
      expect(some((a) => a > 1, [])).to.eql(false);
    });

    it("every(a => a > 1, [1, 2, 3])", function () {
      expect(every((a) => a > 1, [1, 2, 3])).to.eql(false);
      expect(every((a) => a < 3, [1, 2, 3])).to.eql(false);
    });

    it("every(a => a > 0, [1, 2, 3])", function () {
      expect(every((a) => a > 0, [1, 2, 3])).to.eql(true);
    });

    it("every(a => a > 0, [])", function () {
      expect(every((a) => a > 0, [])).to.eql(false);
    });
  });

  describe("findIndex", function () {
    it("해당하는 element가 존재하는 경우", function () {
      expect(findIndex((a) => a > 1, [1, 2, 3])).to.eql(1);
    });

    it("해당하는 element가 존재하지 않는 경우", function () {
      expect(findIndex((a) => a === 0, [1, 2, 3])).to.eql(-1);
    });

    it("해당하는 element가 존재하는 경우 (async)", async function () {
      expect(await findIndex((a) => Promise.resolve(a > 1), [1, 2, 3])).to.eql(
        1
      );
    });

    it("해당하는 element가 존재하지 않는 경우 (async)", async function () {
      expect(
        await findIndex((a) => Promise.resolve(a === 0), [1, 2, 3])
      ).to.eql(-1);
    });

    it("list가 Promise로 wrapping된 경우", async function () {
      expect(
        await findIndex(
          (a) => Promise.resolve(a > 2),
          Promise.resolve([1, 2, 3])
        )
      ).to.eql(2);
    });

    it("element가 Promise인 경우", async function () {
      expect(
        await findIndex((a) => Promise.resolve(a > 2), [
          Promise.resolve(1),
          Promise.resolve(2),
          Promise.resolve(3),
        ])
      ).to.eql(2);
    });
  });

  describe("uniq", function () {
    it("uniq([1, 2, 3, 1, 2, 3, 4])", function () {
      expect(uniq([1, 2, 3, 1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
    });

    it("uniq({a: 1, b: 2, c: 3, d: 1, e: 2, f: 4})", function () {
      expect(uniq({ a: 1, b: 2, c: 3, d: 1, e: 2, f: 4 })).to.eql({
        a: 1,
        b: 2,
        c: 3,
        f: 4,
      });
    });
  });

  describe("uniqWith", function () {
    it("sync", function () {
      const strEq = equalsBy(String);
      expect(uniqWith(strEq, [1, "1", 2, 1])).to.eql([1, 2]);
      expect(uniqWith(strEq, [{}, {}])).to.eql([{}]);
      expect(uniqWith(strEq, [1, "1", 1])).to.eql([1]);
      expect(uniqWith(strEq, ["1", 1, 1])).to.eql(["1"]);
    });

    it("async", async function () {
      const strEq = equalsBy(String);
      expect(
        await uniqWith(strEq, [1, Promise.resolve("1"), Promise.resolve(2), 1])
      ).to.eql([1, 2]);
      expect(await uniqWith(strEq, [{}, Promise.resolve({})])).to.eql([{}]);
      expect(await uniqWith(strEq, [1, Promise.resolve("1"), 1])).to.eql([1]);
      expect(await uniqWith(strEq, ["1", Promise.resolve(1), 1])).to.eql(["1"]);
    });
  });

  describe("update", function () {
    it("update(1, '_', ['a', 'b', 'c'])", function () {
      expect(update(1, "_", ["a", "b", "c"])).to.eql(["a", "_", "c"]);
    });

    it("update(-1, '_', ['a', 'b', 'c'])", function () {
      expect(update(-1, "_", ["a", "b", "c"])).to.eql(["a", "b", "_"]);
    });
  });

  describe("updateBy", function () {
    it("updateBy(1, a => a.toUpperCase(), ['a', 'b', 'c'])", function () {
      expect(updateBy(1, (a) => a.toUpperCase(), ["a", "b", "c"])).to.eql([
        "a",
        "B",
        "c",
      ]);
    });

    it("updateBy(1, a => Promise.resolve(a.toUpperCase()), ['a', 'b', 'c'])", async function () {
      expect(
        await updateBy(1, (a) => Promise.resolve(a.toUpperCase()), [
          "a",
          "b",
          "c",
        ])
      ).to.eql(["a", "B", "c"]);
    });

    it("updateBy(-1, a => a.toUpperCase(), ['a', 'b', 'c'])", function () {
      expect(updateBy(-1, (a) => a.toUpperCase(), ["a", "b", "c"])).to.eql([
        "a",
        "b",
        "C",
      ]);
    });

    it("updateBy(-1, a => Promise.resolve(a.toUpperCase()), ['a', 'b', 'c'])", async function () {
      expect(
        await updateBy(-1, (a) => Promise.resolve(a.toUpperCase()), [
          "a",
          "b",
          "c",
        ])
      ).to.eql(["a", "b", "C"]);
    });
  });

  describe("go", function () {
    it(`
    go(
      0,
      a => a + 1,
      a => a + 10,
      a => a + 100)`, function () {
      expect(
        go(
          0,
          (a) => a + 1,
          (a) => a + 10,
          (a) => a + 100
        )
      ).to.eql(111);
    });

    it(`
    go(
      0,
      a => { throw { hi: 'ho' } },
      a => a + 10,
      a => a + 100)`, function () {
      try {
        go(
          0,
          (a) => {
            throw { hi: "ho" };
          },
          (a) => a + 10,
          (a) => a + 100
        );
      } catch (a) {
        expect(a).to.eql({ hi: "ho" });
      }
    });

    it(`
    go(
      0,
      a => Promise.resolve(a + 1),
      a => a + 10,
      a => a + 100)`, async function () {
      expect(
        await go(
          0,
          (a) => Promise.resolve(a + 1),
          (a) => a + 10,
          (a) => a + 100
        )
      ).to.eql(111);
    });

    it(`
    go(
      0,
      a => Promise.resolve(a + 1),
      a => Promise.reject({ hi: 'ho' }),
      a => a + 100)`, async function () {
      try {
        await go(
          0,
          (a) => Promise.resolve(a + 1),
          (a) => Promise.reject({ hi: "ho" }),
          (a) => a + 100
        );
      } catch (a) {
        expect(a).to.eql({ hi: "ho" });
      }
    });

    it(`
    go(
      0,
      a => Promise.resolve(a + 1),
      a => { throw { hi: 'ho' } },
      a => a + 100)`, async function () {
      try {
        await go(
          0,
          (a) => Promise.resolve(a + 1),
          (a) => {
            throw { hi: "ho" };
          },
          (a) => a + 100
        );
      } catch (a) {
        expect(a).to.eql({ hi: "ho" });
      }
    });
  });

  describe("flatten", function () {
    it(`deepFlatten([1, 2, [3]])`, function () {
      expect(deepFlatten([1, 2, [3]])).to.eql([1, 2, 3]);
    });
  });

  describe("goS", function () {
    it(`goS`, function () {
      expect(
        reduceS(
          (a, b) => {
            const res = a + b;
            return res > 5 ? stop(res) : res;
          },
          [1, 2, 3, 4]
        )
      ).to.eql(6);

      expect(
        goS(
          1,
          (a) => (a % 2 ? stop(a) : a),
          (a) => a + 10
        )
      ).to.eql(1);
      expect(
        goS(
          2,
          (a) => (a % 2 ? stop(a) : a),
          (a) => a + 10
        )
      ).to.eql(12);
      expect(
        goS(
          1,
          stopIf((a) => a % 2),
          (a) => a + 10
        )
      ).to.eql(1);
      expect(
        goS(
          2,
          stopIf((a) => a % 2),
          (a) => a + 10
        )
      ).to.eql(12);

      const f1 = pipeS(
        (a) => (a % 2 ? stop(a) : a),
        (a) => a + 10
      );
      const f2 = pipeS(
        stopIf((a) => a % 2),
        (a) => a + 10
      );

      expect(f1(1)).to.eql(1);
      expect(f1(2)).to.eql(12);
      expect(f2(1)).to.eql(1);
      expect(f2(2)).to.eql(12);

      expect(goS(1, stopIf(1), (a) => a + 10)).to.eql(1);
      expect(
        goS({ a: 1, b: 2 }, stopIf({ a: 1 }), ({ a, b }) => ({ a: a + 10, b }))
      ).to.eql({ a: 1, b: 2 });
      expect(
        goS({ a: 2, b: 2 }, stopIf({ a: 1 }), ({ a, b }) => ({ a: a + 10, b }))
      ).to.eql({ a: 12, b: 2 });
      expect(
        goS({ a: 1, b: 2 }, stopIf({ a: 1 }, null), ({ a, b }) => ({
          a: a + 10,
          b,
        }))
      ).to.eql(null);
    });
  });

  describe("callEach", function () {
    it(`callEach`, async function () {
      expect(
        await callEach([
          (_) => Promise.resolve(1),
          (_) => Promise.resolve(2),
          (_) => Promise.resolve(3),
        ])
      ).to.eql([1, 2, 3]);

      expect(
        await callEach({
          a: (_) => Promise.resolve(1),
          b: (_) => Promise.resolve(2),
          c: (_) => Promise.resolve(3),
        })
      ).to.eql({ a: 1, b: 2, c: 3 });
    });

    it(`C.callEach`, async function () {
      expect(
        await C.callEach([
          (_) => Promise.resolve(1),
          (_) => Promise.resolve(2),
          (_) => Promise.resolve(3),
        ])
      ).to.eql([1, 2, 3]);

      expect(
        await C.callEach({
          a: (_) => Promise.resolve(1),
          b: (_) => Promise.resolve(2),
          c: (_) => Promise.resolve(3),
        })
      ).to.eql({ a: 1, b: 2, c: 3 });
    });
  });

  describe("mapObject", function () {
    it(`mapObject(a => a + 1, { a: 1, b: 2})`, function () {
      expect(mapObject((a) => a + 1, { a: 1, b: 2 })).to.eql({ a: 2, b: 3 });
    });

    it(`mapObject(a => Promise.resolve(a + 1), { a: 1, b: 2})`, async function () {
      expect(
        await mapObject((a) => Promise.resolve(a + 1), { a: 1, b: 2 })
      ).to.eql({ a: 2, b: 3 });
    });
  });

  describe("promiseAll...", function () {
    it(`promiseAllObject({ a: Promise.resolve(1), b: Promise.resolve(2)})`, async function () {
      expect(
        await promiseAllObject({ a: Promise.resolve(1), b: Promise.resolve(2) })
      ).to.eql({ a: 1, b: 2 });
    });

    it(`promiseAllEntries(Object.entries({ a: Promise.resolve(1), b: Promise.resolve(2)}))`, async function () {
      expect(
        await promiseAllEntries(
          Object.entries({
            a: Promise.resolve(1),
            b: Promise.resolve(2),
          })
        )
      ).to.eql(Object.entries({ a: 1, b: 2 }));
    });
  });

  describe("differenceBy", function () {
    it("differenceBy(a => a.x, [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }])", function () {
      expect(
        differenceBy((a) => a.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }])
      ).to.eql([{ x: 2 }]);
    });
  });

  describe("differenceWith", function () {
    it("differenceWith sync function", function () {
      const cmp = (x, y) => x.a === y.a;
      const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
      const l2 = [{ a: 3 }, { a: 4 }];
      expect(differenceWith(cmp, l1, l2)).to.eql([
        { a: 1 },
        { a: 2 },
        { a: 5 },
      ]);
    });

    it("differenceWith async function", async function () {
      const cmp = (x, y) => Promise.resolve(x.a === y.a);
      const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
      const l2 = [{ a: 3 }, { a: 4 }];
      expect(await differenceWith(cmp, l1, l2)).to.eql([
        { a: 1 },
        { a: 2 },
        { a: 5 },
      ]);
    });

    it("differenceWith promise iterable elements", async function () {
      const cmp = (x, y) => Promise.resolve(x.a === y.a);
      const l1 = [
        { a: 1 },
        Promise.resolve({ a: 2 }),
        Promise.resolve({ a: 3 }),
        { a: 4 },
        { a: 5 },
      ];
      const l2 = [{ a: 3 }, Promise.resolve({ a: 4 })];
      expect(await differenceWith(cmp, l1, l2)).to.eql([
        { a: 1 },
        { a: 2 },
        { a: 5 },
      ]);
    });
  });

  describe("difference", function () {
    it("difference([2, 1], [2, 3])", function () {
      expect(difference([2, 3], [2, 1])).to.eql([1]);
    });

    it("difference([1], [1,2,3,4,5,6,7,8])", function () {
      expect(difference([1, 2, 3, 4, 5, 6, 7, 8], [1])).to.eql([]);
    });

    it("difference([1,1,1,1,1], [2,2,2,2])", function () {
      expect(difference([2, 2, 2, 2], [1, 1, 1, 1, 1])).to.eql([1, 1, 1, 1, 1]);
      expect(difference([2], [1, 2, 3, 4])).to.eql([1, 3, 4]);
    });
  });

  describe("ifElse", function () {
    it("ifElse sync", function () {
      expect(
        ifElse(
          selEquals("name", "dh"),
          (obj) => ((obj.age = 27), obj),
          (obj) => ((obj.name = "hd"), obj),
          { name: "dh", age: 26 }
        )
      ).to.eql({ name: "dh", age: 27 });
    });

    it("ifElse async", async function () {
      expect(
        await ifElse(
          selSatisfies((age) => Promise.resolve(age === 26), "age"),
          (obj) => Promise.resolve(((obj.age = 27), obj)),
          (obj) => Promise.resolve(((obj.name = "hd"), obj)),
          { name: "dh", age: 26 }
        )
      ).to.eql({ name: "dh", age: 27 });
    });
  });

  describe("initial", function () {
    it("initial([1, 2, 3])", function () {
      expect(initial([1, 2, 3])).to.eql([1, 2]);
    });
  });

  describe("rest", function () {
    it("rest([1, 2, 3])", function () {
      expect(rest([1, 2, 3])).to.eql([2, 3]);
    });
  });

  describe("repeat", function () {
    it("repeat('hi', 5)", function () {
      expect(repeat("hi", 5)).to.eql(["hi", "hi", "hi", "hi", "hi"]);
    });
  });

  describe("insert", function () {
    it("insert (prepend)", function () {
      expect(insert(-1, 0, [1, 2, 3])).to.eql([0, 1, 2, 3]);
      expect(insert(0, 0, [1, 2, 3])).to.eql([0, 1, 2, 3]);
    });

    it("insert (middle)", function () {
      expect(insert(2, 2.5, [1, 2, 3])).to.eql([1, 2, 2.5, 3]);
    });

    it("insert (append)", function () {
      expect(insert(3, 4, [1, 2, 3])).to.eql([1, 2, 3, 4]);
      expect(insert(100, 4, [1, 2, 3])).to.eql([1, 2, 3, 4]);
    });
  });

  describe("intersectionBy", function () {
    it("intersectionBy(o => o.x, [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }])", function () {
      expect(
        intersectionBy((o) => o.x, [{ x: 2 }, { x: 1 }], [{ x: 1 }])
      ).to.eql([{ x: 1 }]);
    });
  });

  describe("intersectionWith", function () {
    const cmp = (x, y) => x.a === y.a;
    const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
    const l2 = [{ a: 3 }, { a: 4 }];

    it("intersectionWith sync", function () {
      expect(intersectionWith(cmp, l1, l2)).to.eql([{ a: 3 }, { a: 4 }]);
    });
  });

  describe("intersection", function () {
    it("intersection([2, 1], [2, 3])", function () {
      expect(intersection([2, 1], [2, 3])).to.eql([2]);
    });

    it("intersection([1, 2, 1, 1, 3], [1, 1, 1, 2, 4])", function () {
      expect(intersection([1, 2, 1, 1, 3], [1, 1, 1, 2, 4])).to.eql([1, 2]);
    });
  });

  describe("unionBy", function () {
    it("unionBy(Math.floor, [2.1, 2.2], [1.2, 2.3])", function () {
      expect(unionBy(Math.floor, [2.1, 2.2], [1.2, 2.3])).to.eql([2.1, 1.2]);
    });

    it("unionBy(a => a.x, [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }])", function () {
      expect(unionBy((a) => a.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }])).to.eql([
        { x: 1 },
        { x: 2 },
      ]);
    });

    it("unionBy(a => Promise.resolve(a.x), [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }])", async function () {
      expect(
        await unionBy(
          (a) => Promise.resolve(a.x),
          [{ x: 1 }],
          [{ x: 2 }, { x: 1 }]
        )
      ).to.eql([{ x: 1 }, { x: 2 }]);
    });
  });

  describe("union", function () {
    it("union([2, 3], [2, 1, 4])", function () {
      expect(union([2, 3], [2, 1, 4])).to.eql([2, 3, 1, 4]);
    });
  });

  describe("unionWith", function () {
    it("sync ", function () {
      const l1 = [{ a: 1 }, { a: 2 }];
      const l2 = [{ a: 1 }, { a: 4 }];

      expect(unionWith(equalsBy(sel("a")), l1, l2)).to.eql([
        { a: 1 },
        { a: 2 },
        { a: 4 },
      ]);
    });

    it("async ", async function () {
      const l1 = [{ a: 1 }, Promise.resolve({ a: 2 })];
      const l2 = [Promise.resolve({ a: 1 }), { a: 4 }];

      expect(await unionWith(equalsBy(sel("a")), l1, l2)).to.eql([
        { a: 1 },
        { a: 2 },
        { a: 4 },
      ]);
    });
  });

  describe("zip", function () {
    it("zip(['a', 'b'], [1, 2], [true, false])", function () {
      expect(zip(["a", "b"], [1, 2], [true, false])).to.eql([
        ["a", 1, true],
        ["b", 2, false],
      ]);
    });

    it("zip(['a', 'b', 'c'], [1, 2], [true, false])", function () {
      expect(zip(["a", "b", "c"], [1, 2], [true, false])).to.eql([
        ["a", 1, true],
        ["b", 2, false],
        ["c", undefined, undefined],
      ]);
    });

    it("zip(['a', 'b'], [1, 2], [true, false, true])", function () {
      expect(zip(["a", "b"], [1, 2], [true, false, true])).to.eql([
        ["a", 1, true],
        ["b", 2, false],
        [undefined, undefined, true],
      ]);
    });

    it("zip(Promise.resolve(['a', 'b']), [1, 2], Promise.resolve([true, false]))", async function () {
      expect(
        await zip(
          Promise.resolve(["a", "b"]),
          [1, 2],
          Promise.resolve([true, false])
        )
      ).to.eql([
        ["a", 1, true],
        ["b", 2, false],
      ]);
    });

    it("zip(Promise.resolve(['a', Promise.resolve('b')]), [Promise.resolve(1), Promise.resolve(2)], [true, false])", async function () {
      expect(
        await zip(
          Promise.resolve(["a", Promise.resolve("b")]),
          [Promise.resolve(1), Promise.resolve(2)],
          [true, false]
        )
      ).to.eql([
        ["a", 1, true],
        ["b", 2, false],
      ]);
    });
  });

  describe("unzip", function () {
    it("to empty list", function () {
      expect(unzip([["a", 1, true]])).to.eql([["a"], [1], [true]]);
    });

    it("to single pair", function () {
      expect(unzip([["a", 1, true]])).to.eql([["a"], [1], [true]]);
    });
    it("to multiple pairs", function () {
      expect(
        unzip([
          ["a", 1, true],
          ["b", 2, false],
        ])
      ).to.eql([
        ["a", "b"],
        [1, 2],
        [true, false],
      ]);
    });
  });

  describe("zipObj", function () {
    it("zipObj(['a', 'b', 'c'], [1, 2, 3])", function () {
      expect(zipObj(["a", "b", "c"], [1, 2, 3])).to.eql({ a: 1, b: 2, c: 3 });
    });
  });

  describe("zipWith", function () {
    it("zipWith((a, b) => `${a}=${b}`, ['a', 'b', 'c'], [1, 2, 3])", function () {
      expect(
        zipWith((a, b) => `${a}=${b}`, ["a", "b", "c"], [1, 2, 3])
      ).to.eql(["a=1", "b=2", "c=3"]);
    });

    it("zipWith((a, b) => Promise.resolve(`${a}=${b}`), ['a', 'b', 'c'], [1, 2, 3])", async function () {
      expect(
        await zipWith(
          (a, b) => Promise.resolve(`${a}=${b}`),
          ["a", "b", "c"],
          [1, 2, 3]
        )
      ).to.eql(["a=1", "b=2", "c=3"]);
    });
  });

  describe("partition", function () {
    it("partition(a => a % 2, [1, 2, 3, 4])", function () {
      expect(partition((a) => a % 2, [1, 2, 3, 4])).to.eql([
        [1, 3],
        [2, 4],
      ]);
    });

    it("partition(a => a % 2, [2, 4])", function () {
      expect(partition((a) => a % 2, [2, 4])).to.eql([[], [2, 4]]);
    });

    it("partition(a => Promise.resolve(a % 2), [1, 2, 3, 4])", async function () {
      expect(
        await partition((a) => Promise.resolve(a % 2), [1, 2, 3, 4])
      ).to.eql([
        [1, 3],
        [2, 4],
      ]);
    });

    it("partition(a => a % 2, [1, Promise.resolve(2), 3, Promise.resolve(4)])", async function () {
      expect(
        await partition((a) => a % 2, [
          1,
          Promise.resolve(2),
          3,
          Promise.resolve(4),
        ])
      ).to.eql([
        [1, 3],
        [2, 4],
      ]);
    });
  });

  describe("join", function () {
    it("join(',' [1, 2, 3])", function () {
      expect(join("-", [1, 2, 3])).to.eql("1-2-3");
    });
  });

  describe("chunk", function () {
    it("L.chunk + take", function () {
      expect(take(3, L.chunk(2, L.range(10)))).to.eql([
        [0, 1],
        [2, 3],
        [4, 5],
      ]);
    });

    it("chunk(4, [1, 2, 3, 4])", function () {
      expect(chunk(2, [1, 2, 3, 4])).to.eql([
        [1, 2],
        [3, 4],
      ]);
    });

    it('chunk(4, "abcdefghij")', function () {
      expect(chunk(4, "abcdefghij")).to.eql([
        ["a", "b", "c", "d"],
        ["e", "f", "g", "h"],
        ["i", "j"],
      ]);
    });
  });

  describe("splitEvery", function () {
    it("L.splitEvery(2, null)", function () {
      expect(take(3, L.splitEvery(2, null))).to.eql([]);
    });

    it("L.splitEvery + take", function () {
      expect(take(3, L.splitEvery(2, "abcdefghij"))).to.eql(["ab", "cd", "ef"]);
    });

    it("splitEvery(2, 'abcdefghij')", function () {
      expect(splitEvery(2, "abcdefghij")).to.eql([
        "ab",
        "cd",
        "ef",
        "gh",
        "ij",
      ]);
    });
  });

  describe("append", function () {
    it("L.append + take", function () {
      expect(takeAll(L.append(3, [1, 2]))).to.eql([1, 2, 3]);
      expect(takeAll(L.append("c", "ab"))).to.eql(["a", "b", "c"]);
    });
  });

  describe("prepend", function () {
    it("L.prepend + take", function () {
      expect(take(3, L.prepend(0, [1, 2, 3, 4, 5]))).to.eql([0, 1, 2]);
      expect(takeAll(L.prepend("a", "bc"))).to.eql(["a", "b", "c"]);
    });
  });

  describe("sumBy", function () {
    it("#", function () {
      const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
      expect(sumBy(sel("a"), arr)).to.eql(6);
    });
  });

  describe("both", function () {
    it("sync", function () {
      const gt10 = (a) => a > 10;
      const lt20 = (a) => a < 20;
      const f = both(gt10, lt20);

      expect(f(10)).to.eql(false);
      expect(f(11)).to.eql(true);
      expect(f(19)).to.eql(true);
      expect(f(20)).to.eql(false);
    });

    it("async", async function () {
      const gt10 = (a) => Promise.resolve(a > 10);
      const lt20 = (a) => Promise.resolve(a < 20);
      const f = both(gt10, lt20);

      expect(await f(10)).to.eql(false);
      expect(await f(11)).to.eql(true);
      expect(await f(19)).to.eql(true);
      expect(await f(20)).to.eql(false);
    });
  });

  describe("either", function () {
    it("sync", function () {
      const lengthGt5 = (...nums) => nums.length > 5;
      const sumEq10 = (...nums) => nums.reduce(add) === 10;
      const f = either(lengthGt5, sumEq10);

      expect(f(...L.range(3))).to.eql(false);
      expect(f(...L.range(5))).to.eql(true);
      expect(f(...L.range(7))).to.eql(true);
    });

    it("async", async function () {
      const lengthGt5 = (...nums) => Promise.resolve(nums.length > 5);
      const sumEq10 = (...nums) => Promise.resolve(nums.reduce(add) === 10);
      const f = either(lengthGt5, sumEq10);

      expect(await f(...L.range(3))).to.eql(false);
      expect(await f(...L.range(5))).to.eql(true);
      expect(await f(...L.range(7))).to.eql(true);
    });
  });

  describe("meanBy, mean", function () {
    it("sync", function () {
      expect(mean(L.range(1, 6))).to.eql(3);
    });

    it("async", async function () {
      expect(
        await mean(L.map(Promise.resolve.bind(Promise), L.range(1, 6)))
      ).to.eql(3);
    });
  });

  describe("satisfiesEvery", function () {
    it("sync functions with an argument", function () {
      const fns = [lt(1), gt(10), equals(5)];
      expect(satisfiesEvery(fns, 5)).to.eql(true);
    });

    it("sync functions with many arguments", function () {
      const fns = [
        equalsBy(pipe(sum, lt(1)), true),
        equalsBy(pipe(sum, gt(10)), true),
        equalsBy(sum, 5),
      ];
      expect(satisfiesEvery(fns)(1, 1, 1, 1, 1)).to.eql(true);
    });

    it("async functions with an argument", async function () {
      const fns = [lt(1), gt(10), equals(5)];
      const async_fns = map((f) => pipe(f, Promise.resolve.bind(Promise)), fns);
      expect(await satisfiesEvery(async_fns, 5)).to.eql(true);
    });

    it("async functions with many arguments", async function () {
      const fns = [
        equalsBy(pipe(sum, lt(1)), true),
        equalsBy(pipe(sum, gt(10)), true),
        equalsBy(sum, 5),
      ];
      const async_fns = map((f) => pipe(f, Promise.resolve.bind(Promise)), fns);
      expect(await satisfiesEvery(async_fns)(1, 1, 1, 1, 1)).to.eql(true);
    });
  });

  describe("satisfiesSome", function () {
    it("sync functions with an argument", function () {
      const fns = [gt(1), lt(10), equals(5)];
      expect(satisfiesSome(fns, 5)).to.eql(true);
    });

    it("sync functions with many arguments", function () {
      const fns = [
        equalsBy(pipe(sum, gt(1)), true),
        equalsBy(pipe(sum, lt(10)), true),
        equalsBy(sum, 5),
      ];
      expect(satisfiesSome(fns)(1, 1, 1, 1, 1)).to.eql(true);
    });

    it("async functions with an argument", async function () {
      const fns = [gt(1), lt(10), equals(5)];
      const async_fns = map((f) => pipe(f, Promise.resolve.bind(Promise)), fns);
      expect(await satisfiesSome(async_fns, 5)).to.eql(true);
    });

    it("async functions with many arguments", async function () {
      const fns = [
        equalsBy(pipe(sum, gt(1)), true),
        equalsBy(pipe(sum, lt(10)), true),
        equalsBy(sum, 5),
      ];
      const async_fns = map((f) => pipe(f, Promise.resolve.bind(Promise)), fns);
      expect(await satisfiesSome(async_fns)(1, 1, 1, 1, 1)).to.eql(true);
    });
  });

  describe("replace", function () {
    it("search by string", function () {
      expect(replace("foo", "bar", "foo foo foo")).to.eql("bar foo foo");
    });

    it("search by regex", function () {
      expect(replace(/foo/g, "bar", "foo foo foo")).to.eql("bar bar bar");
    });
  });

  describe("cond", function () {
    it("sync", function () {
      const grade_conditions = [
        [lt(90), constant("A")],
        [lt(80), constant("B")],
        [lt(70), constant("C")],
        [lt(60), constant("D")],
        [constant(true), constant("F")],
      ];
      const grade = cond(...grade_conditions);
      expect(grade(91)).to.eql("A");
      expect(grade(60)).to.eql("F");
    });

    it("async", async function () {
      const grade_conditions = [
        [lt(90), constant(Promise.resolve("A"))],
        [lt(80), constant("B")],
        [lt(70), constant("C")],
        [lt(60), constant("D")],
        [constant(Promise.resolve(true)), constant(Promise.resolve("F"))],
      ];
      const grade = cond(...grade_conditions);
      expect(await grade(91)).to.eql("A");
      expect(await grade(60)).to.eql("F");
    });
  });

  describe("fork", function () {
    it("sync", function () {
      const length = (iter) => iter.length;
      const getAverage = fork(divide, sum, length);
      expect(getAverage([23, 30, 40])).to.eql(31);
    });

    it("async", async function () {
      const length = (iter) => Promise.resolve(iter.length);
      const getAverage = fork(divide, sum, length);
      expect(await getAverage([23, 30, 40])).to.eql(31);
    });
  });

  describe("evolve", function () {
    const res = {
      str: "HELLO",
      num: 100,
      sym: true,
      nested: {
        str2: "world!",
        num2: 200,
        sym2: true,
      },
    };

    it("sync", function () {
      const symbol = Symbol();
      const symbol2 = Symbol();
      const dictionary = {
        str: (str) => str.toUpperCase(),
        num: (a) => a * a,
        sym: (a) => a === symbol,
        nested: {
          str2: (a) => a + "!",
          num2: (a) => a * 100,
          sym2: (a) => a === symbol2,
        },
      };
      const obj = {
        str: "hello",
        num: 10,
        sym: symbol,
        nested: {
          str2: "world",
          num2: 2,
          sym2: symbol2,
        },
      };
      expect(evolve(dictionary, obj)).to.eql(res);
    });

    it("async", async function () {
      const symbol = Symbol();
      const symbol2 = Symbol();
      const dictionary = {
        str: (str) => Promise.resolve(str.toUpperCase()),
        num: (a) => a * a,
        sym: (a) => a === symbol,
        nested: {
          str2: (a) => a + "!",
          num2: (a) => Promise.resolve(a * 100),
          sym2: (a) => a === symbol2,
        },
      };
      const obj = {
        str: Promise.resolve("hello"),
        num: 10,
        sym: Promise.resolve(symbol),
        nested: {
          str2: Promise.resolve("world"),
          num2: 2,
          sym2: Promise.resolve(symbol2),
        },
      };
      expect(await evolve(dictionary, obj)).to.eql(res);
    });
  });

  describe("invert", function () {
    it("sync", function () {
      expect(invert({ a: "hello", b: "world" })).to.eql({
        hello: "a",
        world: "b",
      });
      expect(invert({ a: "hello", b: "world", c: "hello" })).to.eql({
        hello: "c",
        world: "b",
      });
      expect(invert({ c: "hello", b: "world", a: "hello" })).to.eql({
        hello: "a",
        world: "b",
      });
    });

    it("async", async function () {
      expect(
        await invert({
          c: "hello",
          b: Promise.resolve("world"),
          a: Promise.resolve("hello"),
        })
      ).to.eql({ hello: "a", world: "b" });
    });
  });

  describe("invertBy", function () {
    it("sync", function () {
      expect(
        invertBy(identity, { a: "hello", b: "world", c: "hello" })
      ).to.eql({ hello: ["a", "c"], world: ["b"] });

      expect(
        invertBy((v) => `${v}${v === "hello" ? "~" : "!"}`, {
          c: "hello",
          b: "world",
          a: "hello",
        })
      ).to.eql({ "hello~": ["c", "a"], "world!": ["b"] });
    });

    it("async", async function () {
      expect(
        await invertBy(identity, {
          a: Promise.resolve("hello"),
          b: Promise.resolve("world"),
          c: "hello",
        })
      ).to.eql({ hello: ["a", "c"], world: ["b"] });

      expect(
        await invertBy(
          (v) => Promise.resolve(`${v}${v === "hello" ? "~" : "!"}`),
          { c: "hello", b: Promise.resolve("world"), a: "hello" }
        )
      ).to.eql({ "hello~": ["c", "a"], "world!": ["b"] });
    });
  });

  describe("isEmpty", function () {
    it("string", function () {
      expect(isEmpty("")).to.eql(true);
      expect(isEmpty("abc")).to.eql(false);
    });

    it("object", function () {
      expect(isEmpty({})).to.eql(true);
      expect(isEmpty({ a: 1 })).to.eql(false);
    });

    it("array", function () {
      expect(isEmpty([])).to.eql(true);
      expect(isEmpty([1])).to.eql(false);
    });

    it("iterable", function () {
      expect(isEmpty((function* () {})())).to.eql(true);
      const range3 = L.range(3);
      expect(isEmpty(range3)).to.eql(false);
      expect([...range3]).to.eql([1, 2]);
    });
  });

  describe("clone", function () {
    it("copy deeply", function () {
      const a = { a: 1, b: { c: 2, d: { e: 3 } } };
      const res = clone(a);
      expect(res).to.eql({ a: 1, b: { c: 2, d: { e: 3 } } });
      expect(a === res).to.eql(false);
      expect(a.b === res.b).to.eql(false);
      expect(a.b.d === res.b.d).to.eql(false);
    });

    it("supports promise values", async function () {
      const a = {
        a: 1,
        b: { c: Promise.resolve(2), d: { e: Promise.resolve(3) } },
      };
      const res = await clone(a);
      expect(res).to.eql({ a: 1, b: { c: 2, d: { e: 3 } } });
      expect(a === res).to.eql(false);
      expect(a.b === res.b).to.eql(false);
      expect(a.b.d === res.b.d).to.eql(false);
    });

    it("deal with function to empty object", function () {
      const a = (_) => _;
      const res = clone(a);
      expect(res).to.eql({});

      const b = { aa: () => {}, bb: { cc: () => {} } };
      const res2 = clone(b);
      expect(res2).to.eql({ aa: {}, bb: { cc: {} } });
    });

    it("string", function () {
      const res = clone({ a: "abc" });
      expect(res).to.eql({ a: "abc" });
    });

    it("array", function () {
      const array = [1, 2, 3];
      const res = clone({ a: array });
      expect(res.a === array).to.eql(false);
      expect(res).to.eql({ a: [1, 2, 3] });
    });

    it("iterable", function () {
      const iter = toIter([1, 2, 3]);
      const res = clone({ a: iter });
      expect(res.a === iter).to.eql(false);
      takeAll(iter);
      expect(takeAll(res.a)).to.eql([]);
    });
  });

  describe("merge", function () {
    it("copy deeply", function () {
      const a = { a: 1, b: { c: 2, d: { e: 3 } } };
      const b = { a: 1, b: { c: 2, d: { e: 3 } } };

      const res = merge(a, b);
      expect(res).to.eql({ a: 1, b: { c: 2, d: { e: 3 } } });

      expect(a === res).to.eql(false);
      expect(b === res).to.eql(false);

      expect(a.b === res.b).to.eql(false);
      expect(b.b === res.b).to.eql(false);

      expect(a.b.d === res.b.d).to.eql(false);
      expect(b.b.d === res.b.d).to.eql(false);
    });

    it("sync", function () {
      const a = { z: "abc", a: 1, b: { c: 2, d: { e: 3 } }, f: 5 };
      const b = { a: 2, b: { c: 3, d: { e: 4 } } };
      expect(merge(a, b)).to.eql({
        z: "abc",
        a: 2,
        b: { c: 3, d: { e: 4 } },
        f: 5,
      });
    });

    it("async", async function () {
      const a = {
        z: 0,
        a: Promise.resolve(1),
        b: { c: 2, d: Promise.resolve({ e: 3 }) },
        f: Promise.resolve(5),
      };
      const b = { a: 2, b: Promise.resolve({ c: 3, d: { e: 4 } }) };
      expect(await merge(a, b)).to.eql({
        z: 0,
        a: 2,
        b: { c: 3, d: { e: 4 } },
        f: 5,
      });
    });
  });

  describe("includes", function () {
    it("String, String", function () {
      expect(includes("ppl", "apple")).to.eql(true);
      expect(includes("b", "apple")).to.eql(false);
    });

    it("primitive value, Array", function () {
      expect(includes("banana", ["apple", "banana"])).to.eql(true);
      expect(includes("kiwi", ["apple", "banana"])).to.eql(false);
    });

    it("Object, Array<Object>", function () {
      const fruits = [
        { type: "fruit", name: "apple" },
        { type: "fruit", name: "banana" },
      ];
      expect(includes({ type: "fruit", name: "apple" }, fruits)).to.eql(true);
      expect(includes({ type: "company", name: "apple" }, fruits)).to.eql(
        false
      );
      expect(includes({ type: "company", name: "apple" }, [1, 2, 3])).to.eql(
        false
      );
    });

    it("Array, Array<Array>", async function () {
      expect(includes([42], [[42]])).to.eql(true);
      expect(await includes([42], [Promise.resolve([42])])).to.eql(true);
      expect(await includes([41], [Promise.resolve([42])])).to.eql(false);
      expect(await includes([Promise.resolve(42)], [[42]])).to.eql(true);
      expect(await includes([Promise.resolve(41)], [[42]])).to.eql(false);
    });
  });

  describe("blockUntilSettled", function () {
    it("Reject follow calls", async function () {
      let call = 0;
      const add1 = () =>
        new Promise((res) => {
          setTimeout(() => {
            call += 1;
            res();
          }, 2000);
        });

      const newAdd1 = blockUntilSettled(add1);

      await Promise.all([newAdd1(), newAdd1(), newAdd1(), newAdd1()]);

      expect(call).to.eql(1);
    });

    it("Call next after prev end", async function () {
      let call = 0;
      const add1 = () =>
        new Promise((res) => {
          setTimeout(() => {
            call += 1;
            res();
          }, 2000);
        });

      const newAdd1 = blockUntilSettled(add1);

      await Promise.all([newAdd1(), newAdd1()]);

      expect(call).to.eql(1);

      await delay(2000);
      await newAdd1();
      expect(call).to.eql(2);
    });
  });
})();
