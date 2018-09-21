export const
  identity = a => a,

  noop = function() {},

  nop = Symbol('nop'),

  not = a => !a,

  curry = f =>
    (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._);

export const
  isString = a => typeof a == 'string',

  is_string = isString,

  isFunction = a => typeof a == 'function',

  is_function = isFunction;

export const
  hasIter = coll => !!(coll && coll[Symbol.iterator]),

  alterIter = alter => coll =>
    hasIter(coll) ? coll[Symbol.iterator]() : alter(coll),

  collIter = alterIter(Lvalues);

export const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);

export const L = {};

function* Lvalues(obj) {
  for (const k in obj) yield obj[k];
}
L.values = Lvalues;

L.entries = function *(obj) {
  for (const k in obj) yield [k, obj[k]];
};

L.reverse = function *(arr) {
  var l = arr.length;
  while (l--) yield arr[l];
};

L.tail = function(coll) {
  var iter = collIter(coll);
  return go1(take(1, iter), _ => iter);
};

L.headTail = L.head_tail = function(coll) {
  var iter = collIter(coll);
  return go1(take(1, iter), head => [head, iter]);
};

L.range = function *(limit) {
  var i = -1;
  while (++i < limit) yield i;
};

L.map = curry(function *(f, coll) {
  for (const a of coll) yield go1(a, f);
});

L.filter = curry(function *(f, coll) {
  for (const a of collIter(coll)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield Promise.all([a, b]).then(([a, b]) => b ? a : Promise.reject(nop));
    else if (b) yield a;
  }
});

L.entriesMap = L.eMap = curry(function *(f, coll) {
  for (const [k, a] of coll) yield go1(go1(a, f), b => [k, b]);
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

  set2 = curry((obj, kv) => (set(kv, obj), kv));

export const
  last = arr => arr[arr.length-1];

export const
  reduce = curry((f, coll, acc) => {
    var iter = collIter(coll);
    acc = acc === undefined ? iter.next().value : acc;
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

  pipe = (f, ...fs) => (...as) => reduce(call2, fs, f(...as)),

  tap = (f, ...fs) => (a, ...as) => go(reduce(call2, fs, f(a, ...as)), _ => a),

  each = curry((f, coll) => go(reduce((_, a) => f(a), coll, null), _ => coll));

export const take = curry(function(limit, coll) {
  var res = [], iter = collIter(coll);
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

  take1 = take(1);

export const
  head = pipe(take1, ([a]) => a),

  tail = coll => takeAll(L.tail(coll));

export const
  map = curry(pipe(L.map, takeAll)),

  pluck = curry((k, coll) => map(a => a[k], coll));

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
    reduce((counts, a) => incSel(counts, f(a)), coll, {})),

  count_by = countBy,

  groupBy = curry((f, coll) =>
    reduce((group, a) => pushSel(group, f(a), a), coll, {})),

  group_by = groupBy,

  indexBy = curry((f, coll) =>
    reduce((indexed, a) => set([f(a), a], indexed), coll, {})),

  index_by = indexBy;

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
  object = coll => reduce((obj, [k, v]) => (obj[k] = v, obj), coll, {}),

  entryMap = curry((f, [k, a]) => go1(f(a), b => [k, b])),

  eMap = entryMap;

export const C = {};

C.map = curry(pipe(L.map, _ => [..._], takeAll));

C.reduce = (f, coll, acc) => reduce(f, [...coll], acc);

C.take = curry((limit, coll) => new Promise(function(resolve) {
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

C.takeAll = coll => C.take(Infinity, coll);

C.take1 = C.take(1);

C.head = pipe(C.take1, ([a]) => a);

C.tail = coll => C.takeAll(L.tail(coll));

C.find = curry(pipe(L.filter, C.head));

C.some = curry(pipe(L.filter, C.take1, _ => _.length == 1));

C.every = curry(pipe(L.reject, C.take1, _ => _.length == 0));