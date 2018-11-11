// FxJS 0.0.10
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
    if (b instanceof Promise) yield Promise.all([a, b]).then(([a, b]) => b ? a : Promise.reject(nop));
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

export const
  call = (f, a) => f(a),

  call2 = (a, f) => f(a);

export const
  set = curry(([k, v], obj) => (obj[k] = v, obj)),

  set2 = curry((obj, kv) => (set(kv, obj), kv)),

  set3 = curry((obj, [k, v]) => (obj[k] = v, obj));

export const
  last = arr => arr[arr.length-1];

export const
  reduce = curry(function(f, acc, coll) {
    if (arguments.length == 2) {
      var iter = L.values(acc);
      acc = iter.next().value;
    } else {
      iter = L.values(coll);
    }
    return function recur() {
      let cur;
      while (!(cur = iter.next()).done) {
        const a = cur.value, acc_ = acc;
        acc = go1(a, a => go1(acc_, acc => f(acc, a)));
        if (acc instanceof Promise)
          return (acc = acc.catch(e => e == nop ? acc_ : Promise.reject(e))).then(recur);
      }
      return acc;
    } ();
  }),

  go = (..._) => reduce(call2, _),

  pipe = (f, ...fs) => (...as) => reduce(call2, f(...as), fs),

  tap = (f, ...fs) => (a, ...as) => go(reduce(call2, f(a, ...as), fs), _ => a),

  hi = tap(log),

  each = curry((f, coll) => go(reduce((_, a) => f(a), null, coll), _ => coll));

export const take = curry(function(limit, coll) {
  if (limit === 0) return [];
  var res = [], iter = L.values(coll);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) return a
        .then(a => (res.push(a), res).length == limit ? res : recur())
        .catch(e => e == nop ? recur() : Promise.reject(e));
      res.push(a);
      if (res.length == limit) return res;
    }
    return res;
  } ();
});

export const
  takeAll = coll => take(Infinity, coll),

  take_all = takeAll,

  take1 = take(1);

export const
  head = pipe(take1, ([a]) => a),

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
    reduce((a, b) => f(a) > f(b) ? a : b, coll)),

  max = maxBy(identity),

  minBy = curry((f, coll) =>
    reduce((a, b) => f(a) > f(b) ? b : a, coll)),

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

C.map = curry(pipe(L.map, _ => [..._], takeAll));

C.entriesMap = C.esMap = C.es_map = curry(pipe(L.esMap, _ => [..._], takeAll));

C.reduce = (f, coll, acc) => reduce(f, acc, [...coll]);

C.take = curry((limit, coll) => limit === 0 ? [] : new Promise(function(resolve) {
  var res = [];
  var i = -1, j = -1, resolved;
  for (const a of coll) {
    ++i;
    Promise.resolve(a).then(a => {
      if (resolved) return;
      res.push(a);
      if (res.length == limit || i == ++j) {
        resolved = true;
        resolve(res);
      }
    }).catch(e => e != nop && Promise.reject(e));
  }
}));

C.takeAll = C.take_all = coll => C.take(Infinity, coll);

C.take1 = C.take(1);

C.head = pipe(C.take1, ([a]) => a);

C.tail = coll => C.takeAll(L.tail(coll));

C.find = curry(pipe(L.filter, C.head));

C.some = curry(pipe(L.filter, C.take1, _ => _.length == 1));

C.every = curry(pipe(L.reject, C.take1, _ => _.length == 0));

C.calls = baseCalls(C.map, C.eMap);

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