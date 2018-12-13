export const
  identity = a => a,

  noop = function() {},

  nop = Symbol('nop'),

  not = a => !a,

  curry = f =>
    (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._),

  log = console.log,

  go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a),

  negate = f => (..._) => go1(f(..._), not),

  constant = a => _ => a;

export const
  isString = a => typeof a == 'string',

  is_string = isString,

  isFunction = a => typeof a == 'function',

  is_function = isFunction,

  isArray = Array.isArray,

  is_array = isArray,

  isUndefined = a => a === undefined,

  is_undefined = isUndefined,

  has = curry((k, obj) => obj.hasOwnProperty(k)),

  hasIter = a => !!(a && a[Symbol.iterator]);

export const L = {};

function *_values(obj) {
  for (const k in obj) yield obj[k];
}
L.values = a => hasIter(a) ? a[Symbol.iterator]() : _values(a);

L.entries = function *(obj) {
  for (const k in obj) yield [k, obj[k]];
};

L.keys = function *(obj) {
  for (const k in obj) yield k;
};

L.reverse = function *(arr) {
  var l = arr.length;
  while (l--) yield arr[l];
};

L.tail = function(coll) {
  var iter = L.values(coll);
  return go1(take(1, iter), _ => iter);
};

L.headTail = L.head_tail = function(coll) {
  var iter = L.values(coll);
  return go1(take(1, iter), ([head]) => [head, iter]);
};

L.range = function *(limit) {
  var i = -1;
  while (++i < limit) yield i;
};

L.map = curry(function *(f, coll) {
  for (const a of L.values(coll)) yield go1(a, f);
});

L.filter = curry(function *(f, coll) {
  for (const a of L.values(coll)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop));
    else if (b) yield a;
  }
});

L.entriesMap = L.esMap = L.es_map = curry(function *(f, coll) {
  for (const [k, a] of L.values(coll)) yield go1(go1(a, f), b => [k, b]);
});

L.reject = baseReject(L.filter);

function baseReject(filter) {
  return curry((f, coll) => filter(pipe(f, not), coll));
}

L.flat = L.flatten = function *(iter) {
  for (const a of iter) {
    if (hasIter(a)) yield *a;
    else yield a;
  }
};

L.deepFlat = L.deep_flat = L.deepFlatten = L.deep_flatten = function *f(iter) {
  for (const a of iter) {
    if (typeof a != 'string' && hasIter(a)) yield *f(a);
    else yield a;
  }
};

L.flatMap = L.flat_map = curry((f, iter) => L.flat(L.map(f, iter)));

export const
  call = (f, a) => f(a),

  call2 = (a, f) => f(a);

export const
  set = curry(([k, v], obj) => (obj[k] = v, obj)),

  set2 = curry((obj, kv) => (set(kv, obj), kv)),

  set3 = curry((obj, [k, v]) => (obj[k] = v, obj));

export const
  last = arr => arr[arr.length-1];

const reduceF = (acc, a, f) =>
  a instanceof Promise ?
    a.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e)) :
    f(acc, a);

export const
  reduce = curry(function(f, acc, iter) {
    if (arguments.length == 2) return reduce(f, head(iter = L.values(acc)), iter);

    iter = L.values(iter);
    return go1(acc, function recur(acc) {
      let cur;
      while (!(cur = iter.next()).done) {
        acc = reduceF(acc, cur.value, f);
        if (acc instanceof Promise) return acc.then(recur);
      }
      return acc;
    });
  }),

  go = (..._) => reduce(call2, _),

  pipe = (f, ...fs) => (...as) => reduce(call2, f(...as), fs),

  tap = (f, ...fs) => (a, ...as) => go(reduce(call2, f(a, ...as), fs), _ => a),

  hi = tap(log),

  each = curry((f, coll) => go(reduce((_, a) => f(a), null, coll), _ => coll));

export const take = curry((l, iter) => {
  if (l === 0) return [];
  let res = [];
  iter = L.values(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then(a => (res.push(a), res).length == l ? res : recur())
          .catch(e => e == nop ? recur() : Promise.reject(e));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  } ();
});

export const
  takeAll = take(Infinity),

  take_all = takeAll,

  take1 = take(1);

export const
  head = iter => go1(take1(iter), ([h]) => h),

  tail = coll => takeAll(L.tail(coll));

const baseCalls = (map, esMap) => (fs, ...args) =>
    hasIter(fs) ?
      map(f => f(...args), fs) :
      object(esMap(f => f(...args), fs));

export const
  map = curry(pipe(L.map, takeAll)),

  esMap = curry(pipe(L.eMap, takeAll)),

  entriesMap = esMap, es_map = esMap,

  pluck = curry((k, coll) => map(a => a[k], coll)),

  calls = baseCalls(map, esMap);

export const
  filter = curry(pipe(L.filter, takeAll)),

  reject = baseReject(filter);

export const
  flatten = pipe(L.flatten, takeAll),

  flat = flatten,

  deepFlatten = pipe(L.deepFlatten, takeAll),

  deepFlat = deepFlatten,

  deep_flat = deepFlat,

  deep_flatten = deepFlat,

  flatMap = curry(pipe(L.map, flat)),

  flat_map = flatMap;

export const
  uniqueBy = curry((f, coll) => {
    const s = new Set();
    const imobj = !hasIter(coll);
    return go(
      coll,
      imobj ? L.entries : identity,
      filter(pipe(
        imobj ? last : identity,
        f,
        b => s.has(b) ? false : s.add(b))),
      imobj ? object : identity);
  }),

  unique_by = uniqueBy,

  unique = uniqueBy(a => a),

  uniq = unique,

  countBy = curry((f, coll) =>
    reduce((counts, a) => incSel(counts, f(a)), {}, coll)),

  count_by = countBy,

  groupBy = curry((f, coll) =>
    reduce((group, a) => pushSel(group, f(a), a), {}, coll)),

  group_by = groupBy,

  indexBy = curry((f, coll) =>
    reduce((indexed, a) => set([f(a), a], indexed), {}, coll)),

  index_by = indexBy,

  maxBy = curry((f, coll) =>
    reduce((a, b) => f(a) >= f(b) ? a : b, coll)),

  max_by = maxBy,

  max = maxBy(identity),

  minBy = curry((f, coll) =>
    reduce((a, b) => f(a) <= f(b) ? a : b, coll)),

  min_by = minBy,

  min = maxBy(identity);

function incSel(parent, k) {
  parent[k] ? parent[k]++ : parent[k] = 1;
  return parent;
}

function pushSel(parent, k, v) {
  (parent[k] || (parent[k] = [])).push(v);
  return parent;
}

export const
  find = curry(pipe(L.filter, head)),

  some = curry(pipe(L.filter, take1, _ => _.length == 1)),

  every = curry(pipe(L.reject, take1, _ => _.length == 0));

export const
  object = coll => reduce((obj, [k, v]) => (obj[k] = v, obj), {}, coll),

  entryMap = curry((f, [k, a]) => go1(f(a), b => [k, b])),

  eMap = entryMap, emap = eMap,

  entries = a => a ? Object.entries(a) : [],

  values = a => a ? Object.values(a) : [],

  keys = a => a ? Object.keys(a) : [];

const basePick = filter => curry((ks, obj) => go(
  obj,
  L.entries,
  filter(([k]) => ks.includes(k)),
  object
));

export const
  pick = basePick(L.filter),

  omit = basePick(L.reject);

const baseExtend = set => tap((obj, ...objs) => {
  const type = typeof obj;
  if (obj && (type == 'object' || type == 'function')) reduce(reduce(set), obj, L.map(entries, objs));
});

export const
  extend = baseExtend(set3),

  defaults = baseExtend(tap((obj, kv) => has(kv[0], obj) || set3(obj, kv)));

export const C = {};

const catchNoop = ([...arr]) =>
  (arr.forEach(a => a instanceof Promise ? a.catch(noop) : a), arr);

C.reduce = curry((f, acc, iter) => iter ?
  reduce(f, acc, catchNoop(iter)) :
  reduce(f, catchNoop(acc)));

C.take = curry((l, iter) => take(l, catchNoop(iter)));

C.takeAll = C.take(Infinity);

C.map = curry(pipe(L.map, C.takeAll));

C.filter = curry(pipe(L.filter, C.takeAll));

C.entriesMap = C.esMap = C.es_map = curry(pipe(L.esMap, C.takeAll));

C.take1 = C.take(1);

C.head = pipe(C.take1, ([a]) => a);

C.tail = coll => C.takeAll(L.tail(coll));

C.find = curry(pipe(L.filter, C.head));

C.some = curry(pipe(L.filter, C.take1, _ => _.length == 1));

C.every = curry(pipe(L.reject, C.take1, _ => _.length == 0));

C.calls = baseCalls(C.map, C.esMap);

export const
  isMatch = curry((a, b) =>
    typeof a == 'function' ? !!a(b)
    :
    isArray(a) && isArray(b) ? every(v => b.includes(v), a)
    :
    typeof b == 'object' ? every(([k, v]) => b[k] == v, L.entries(a))
    :
    a instanceof RegExp ? b.match(a)
    :
    a == b
  ),

  is_match = isMatch;

export const
  findWhere = curry((w, coll) => find(isMatch(w), coll)),

  find_where = findWhere;

function baseMatch(targets) {
  var cbs = [];

  function evl() {
    return go(
      targets,
      values,
      targets =>
        go(cbs,
          find(pb => { return pb._case(...targets); }),
          pb => pb._body(...targets)));
  }

  function _case(f) {
    cbs.push({ _case: typeof f == 'function' ? pipe(...arguments) : isMatch(f) });
    return _body;
  }
  _case.case = _case;

  function _body() {
    cbs[cbs.length-1]._body = pipe(...arguments);
    return _case;
  }

  _case.else = function() {
    _case(_=> true) (...arguments);
    return targets ? evl() : (...targets2) => ((targets = targets2), evl());
  };

  return _case;
}

export const match = (..._) => baseMatch(_);
match.case = (..._) => baseMatch(null).case(..._);

export const
  baseSel = sep => curry(function f(selector, acc) {
    return (
      !selector ?
        acc
      :
      isArray(selector) ?
        reduce((acc, selector) => f(selector, acc), acc, selector)
      :
      typeof selector == 'object' || typeof selector == 'function' ?
        findWhere(selector, acc)
      :
      reduce(
        (acc, key, s = key[0]) =>
          !acc ? acc :
          s == '#' ? findWhere({ id: key.substr(1) }, acc) :
          s == '[' || s == '{' ? findWhere(JSON.parse(key), acc) :
          acc[key],
        acc,
        selector.split(sep))
    );
  }),

  sel = baseSel('.');

export const scat = curry((f, coll) =>
  reduce((a, b) => `${a}${b}`, '', L.map(f, coll)));

const arrComparator = (arr) => (a, b) => {
  let i = -1;
  while (++i < arr.length) {
    const ai = a[arr[i]], bi = b[arr[i]];
    if (ai === bi) continue;
    return ai < bi ? -1 : 1;
  }
  return 0;
};

const baseSortBy = (left, right) => curry(function sortBy(f, arr) {
  return isArray(f) ? sortBy(arrComparator(f), arr) :
    typeof f == 'string' ? sortBy(a => a[f], arr) :
    f.length == 2 ? [...arr].sort(right == -1 ? pipe(f, n => n * -1) : f) :
    [...arr].sort((a, b, fa = f(a), fb = f(b)) => fa == fb ? 0 : fa < fb ? left : right)
});

export const
  sortBy = baseSortBy(-1, 1),
  sort_by = sortBy,
  sortByDesc = baseSortBy(1, -1),
  sort_by_desc = sortByDesc,
  sort = sortBy(identity),
  sortDesc = sortByDesc(identity),
  sort_desc = sortDesc;