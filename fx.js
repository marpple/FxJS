export const
  identity = a => a,

  noop = function() {},

  not = a => !a,

  curry = f =>
    (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._);

export const
  isString = a => typeof a == 'string',

  is_string = isString,

  isFunction = a => typeof a == 'function',

  is_function = isFunction;

const
  hasIter = coll => !!(coll && coll[Symbol.iterator]),

  alterIter = alter => coll =>
    hasIter(coll) ? coll[Symbol.iterator]() : alter(coll),

  collIter = alterIter(valuesIter);

export function *valuesIter(obj) {
  for (const k in obj) yield obj[k];
}

export function *entriesIter(obj) {
  for (const k in obj) yield [k, obj[k]];
}

export function *reverseIter(arr) {
  var l = arr.length;
  while (l--) yield arr[l];
}

export const
  then = curry((f, a) => a instanceof Promise ? a.then(f) : f(a)),

  call = (f, a) => f(a),

  call2 = (a, f) => f(a);

export const
  push = (a, arr) => (arr.push(a), arr),

  push2 = (arr, a) => (arr.push(a), a),

  push3 = (arr, a) => (arr.push(a), arr),

  flatten = arr => [].concat(...arr),

  set = curry(([k, v], obj) => (obj[k] = v, obj)),

  set2 = curry((obj, kv) => (set(kv, obj), kv));

export const
  last = arr => arr[arr.length-1];

export const
  reduce = curry((f, coll, acc) => {
    const iter = collIter(coll);
    return then(function (cur) {
      return function recur(acc) {
        while ((cur = iter.next()) && !cur.done) {
          if (cur instanceof Promise) return cur.then(cur => cur.done ? acc : then(recur, f(acc, cur.value)));
          const a = cur.value;
          acc = acc instanceof Promise ? acc.then(acc => f(acc, a)) : f(acc, a);
        }
        return acc;
      } (acc === undefined ? cur.value : acc);
    }, acc === undefined ? iter.next() : acc);
  }),

  go = (..._) => reduce(call2, _),

  pipe = (f, ...fs) => (...as) => reduce(call2, fs, f(...as)),

  tap = (f, ...fs) => (a, ...as) => go(reduce(call2, fs, f(a, ...as)), _ => a),

  each = curry((f, coll) => go(reduce((_, a) => f(a), coll, null), _ => coll));

export const
  lmap = curry((f, coll) => baseLazyLispF(function() {
    return then(cur => cur.done ? cur : then(value => ({value}), f(cur.value)), this.iter.next());
  }, coll)),

  map = curry((f, coll) =>
    hasIter(coll) ?
      all(lmap(f, coll)) :
      reduce(
        (res, [k, a]) => go(f(a), b => (res[k] = b, res)),
        entriesIter(coll),
        {})
  ),

  pluck = curry((k, coll) => map(a => a[k], coll));

export const
  lfilter = curry((f, coll) => baseLazyLispF(function() {
    var recur = (cur, b) => {
      while (!cur.done) {
        if (b = f(cur.value)) return then(b => b ? cur : this.next(), b);
        if ((cur = this.iter.next()) instanceof Promise) return cur.then(recur);
      }
      return { done: true }
    };
    return then(recur, this.iter.next());
  }, coll)),

  filter = curry((f, coll) =>
    hasIter(coll) ?
      all(lfilter(f, coll)) :
      reduce(
        (res, [k, a]) => go(f(a), b => (b && (res[k] = b), res)),
        entriesIter(coll),
        {})
  ),

  lreject = baseReject(lfilter),

  reject = baseReject(filter);

function baseLazyLispF(next, coll) {
  return {
    next,
    iter: coll[Symbol.iterator](),
    [Symbol.iterator]: function() { return this; }
  };
}

function baseReject(filter) {
  return curry((f, coll) => filter(pipe(f, not), coll));
}

export function all(coll) {
  return reduce(push3, coll, []);
}

export const
  uniqueBy = curry((f, coll) => {
    const s = new Set();
    return go(
      coll,
      filter(pipe(
        f,
        b => s.has(b) ? false : s.add(b)
      )));
  }),

  unique = uniqueBy(a => a),

  uniq = unique,

  countBy = curry((f, coll) =>
    reduce((counts, a) => incSel(counts, f(a)), coll, {})),

  count_by = countBy,

  groupBy = curry((f, coll) =>
    reduce((group, a) => pushSel(group, f(a), a), coll, {})),

  group_by = groupBy,

  indexBy = curry((f, coll) =>
    reduce((index, a) => set([f(a), a], index), coll, {})),

  index_by = indexBy;

function incSel(parent, k) {
  parent[k] ? parent[k]++ : parent[k] = 1;
  return parent;
}

function pushSel(parent, k, v) {
  (parent[k] || (parent[k] = [])).push(v);
  return parent;
}

export function *range(limit) {
  var i = -1;
  while (++i < limit) yield i;
}

export const
  object = coll => reduce((obj, [k, v]) => (obj[k] = v, obj),  coll, {});